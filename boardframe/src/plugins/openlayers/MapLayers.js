import * as olLayer from 'ol/layer'
import * as olSource from 'ol/source'
import * as olFormat from 'ol/format'
import { all } from 'ol/loadingstrategy'
import axios from 'axios'

import MapProviders from './MapProviders.js'

const TileXYZLayerBuilder = function () {
    this._id = undefined
    this._visible = true
    this._options = undefined
}
TileXYZLayerBuilder.prototype.id = function (id) {
	this._id = id
	this._options = MapProviders[id]
	return this
}
TileXYZLayerBuilder.prototype.visible = function (visible) {
	this._visible = visible
	return this
}
TileXYZLayerBuilder.prototype.options = function (options) {
	this._options = options
	return this
}
TileXYZLayerBuilder.prototype.build = function () {
	return new olLayer.Tile({
		id: this._id,
		source: new olSource.XYZ(this._options),
		visible: true,
	})
}

const ImageStaticBuilder = function () {
	this._id = undefined
	this._visible = true
	this._url = undefined
	this._imageExtent = undefined
}
ImageStaticBuilder.prototype.id = function (id) {
	this._id = id
	this._url = id
	return this
}
ImageStaticBuilder.prototype.url = function (url) {
	this._url = url
	return this
}
ImageStaticBuilder.prototype.extent = function (w, h) {
	this._imageExtent = [-w / 2, -h / 2, w / 2, w / 2]
	return this
}
ImageStaticBuilder.prototype.build = function () {
	const options = {
		url: this._url,
		crossOrigin: 'anonymous',
		projection: 'EPSG:3857',
		imageExtent: this._imageExtent,
	}
	console.log('ImageStaticBuilder', options)

	return new olLayer.Image({
		source: new olSource.ImageStatic(options),
		visible: this._visible,
		id: '' + this._id,
	})
}

const GeoJSONLayerBuilder = function () {
	this._id = 'GeoJSONLayer'
	this._url = undefined
	this._promise = undefined
	this._source = undefined
	this._cluster = undefined
	this._style = undefined
}
GeoJSONLayerBuilder.prototype.id = function (id) {
	this._id = id
	return this
}
GeoJSONLayerBuilder.prototype.url = function (url) {
	this._url = url
	return this
}
GeoJSONLayerBuilder.prototype.cluster = function (cluster) {
	this._cluster = cluster
	return this
}

GeoJSONLayerBuilder.prototype.promise = function (promise) {
	this._promise = promise
	return this
}

GeoJSONLayerBuilder.prototype.source = function (source) {
	this._source = source
	return this
}

GeoJSONLayerBuilder.prototype.style = function (style) {
	this._style = style
	return this
}

GeoJSONLayerBuilder.prototype.build = function () {
	var source = new olSource.Vector({
		format: new olFormat.GeoJSON(),
		// url: this._url,
		// or
		loader: (extent) => {
			const requests = []
			requests.push(axios({ url: this._url }))
			if (this._promise != undefined) {
				requests.push(this._promise)
			}

			axios
				.all(requests)
				.then((r) => {
					console.log('FeatureLoader: ', r[0].data)
					let features = source.getFormat().readFeatures(r[0].data)

					if (r[1] != undefined) {
						console.log('FeatureLoader Promise: ', r[1].data)
						features.forEach((feature) => {
						feature.setProperties({ promise: r[1] })
							// console.log('FeatureLoader Addtional: ', feature.getProperties())
						})
					}
					source.clear(true)
					source.addFeatures(features)
				})
				.catch(() => {
					source.removeLoadedExtent(extent)
				})
		},
		strategy: all,
	})

	const options = {}
	options['id'] = this._id
	options['visible'] = true
	if (this._cluster != undefined) {
		options['source'] = new olSource.Cluster({
			distance: 10,
			minDistance: 10,
			source: source,
		})
	} else {
		options['source'] = source
	}

	if (this._cluster != undefined && this._style != undefined) {
		options['style'] = (feature) => {
			// console.log('style1', feature)
			let features = feature.get('features')
			if (features == undefined) {
				return this._style(feature, feature.get('promise'))
			} else {
				const size = features.length
				if (size == 1) {
					return this._style(features[0], features[0].get('promise'))
				} else {
					return this._cluster(features)
				}
			}
		}
	} else if (this._cluster != undefined && this._style == undefined) {
		options['style'] = (feature) => {
			// console.log('style2', feature)
			let features = feature.get('features')
			if (features == undefined) {
				return this._cluster([])
			} else {
				return this._cluster(features)
			}
		}
	} else if (this._cluster == undefined && this._style != undefined) {
		options['style'] = (feature) => {
			// console.log('style3', feature)
			return this._style(feature, feature.get('promise'))
		}
	}

	console.log('GeoJSONLayerBuilder', options)

	return new olLayer.Vector(options)
}

export default {
	geoJsonLayer() {
		return new GeoJSONLayerBuilder()
	},

	tileXYZLayer() {
		return new TileXYZLayerBuilder()
	},

	imageStaticLayer() {
		return new ImageStaticBuilder()
	},
}
