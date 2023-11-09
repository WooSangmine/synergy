<template>
  <div id='map' :style="`width: ${width}; height: ${height};`"></div>
</template>

<script>
import lodash from 'lodash'

import 'ol/ol.css'
import * as ol from 'ol'
import * as olControl from 'ol/control'
import proj4 from 'proj4'
import 'olcs/olcs.css'
import olcsCore from 'olcs/core.js'
import * as Cesium from 'cesium'
import OLCesium from 'olcs/OLCesium.js'

// import TileLayers from './MapTileLayers.js'

//olcs Sample
// const OLCS_ION_TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZWVhYmU0Mi1jNTZkLTQ3OGItYmUxYS00YTMyMDQyZTMwNDkiLCJpZCI6NjQ1LCJpYXQiOjE2MDYxMjE2OTF9.zQibbf5P0-moQ8KiV_K7KMtyLHbR-VlPghj8lyqWduU'
// //dotman
// const OLCS_ION_TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYmM5NDlmZC0xYWU5LTQ3YjQtYTg1NC1hZWFlMDhhNjIyMWQiLCJpZCI6NDY4Niwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTQxNTU5NH0.IYyAIxWJ2tqQKOR6OI2NlS8OT1MiXJ7LBgPFaJrlkmA'
//u2ware
const OLCS_ION_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNmI0ZDNiMC02ZThkLTQyYTYtODRhOS00NGUzNzFkYjMyZWUiLCJpZCI6MjU5OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODcwMDM1MDJ9.WyH_qc30JdoYVDH--MOCgKBMZaMQAvS-9stgqtKNZAo'
Cesium.Ion.defaultAccessToken = OLCS_ION_TOKEN

export default {
  props: {
    width: {
      type: String,
      default() {
        return '100%'
      },
    },
    height: {
      type: String,
      default() {
        return '750px'
      },
    },

    annimations: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data: () => ({
    olMap2d: undefined,
    olMap3d: undefined,
    olCoordinations: {
      camera: {
        center: undefined,
        distance: undefined,
        heading: undefined,
        tilt: undefined,
        position: undefined,
        altitude: undefined,
      },
      view: {
        center: undefined,
        rotation: undefined,
        zoon: undefined,
      },
      pointer: undefined,
      // map2d: 'googleRoad',
      // map2d: 'osmStandard',
      // map2d: 'owmCloudsNew',
      map3d: false,
      layers: [],
      //Layers.names()
    },
  }),

  watch: {
    annimations() {
      if (this.olMap2d == undefined) return
      if (this.olMap3d == undefined) return
      if (this.annimations.length < 1) return

      let options = this.annimations.shift()
      if (options == null) return

      //---------------------------------------------
      //
      //---------------------------------------------
      const view = this.olMap3d.getOlView()

      const callback =
        options.callback ||
        (() => {
          this.$emit('coordinate', this.coordinate())
          console.log('watch annimations finished.')
        })
      const duration = options.duration || 1000
      const rotation = options.rotation || undefined
      options.duration = duration
      if (rotation != undefined)
        options.rotation = view.getRotation() + rotation
      console.log('watch annimations started.')

      //---------------------------------------------
      //
      //---------------------------------------------
      if (options.map3d != undefined) {
        this.olMap3d.setEnabled(options.map3d)
        this.olCoordinations.map3d = options.map3d
        console.log('watch annimations 3D ' + (options.map3d ? 'on' : 'off'))
        setTimeout(callback, duration)
        //
      } else if (options.tilt != undefined) {
        try {
          const scene = this.olMap3d.getCesiumScene()
          const scenePivot = olcsCore.pickBottomPoint(scene)
          const sceneAngle = olcsCore.computeAngleToZenith(scene, scenePivot)
          const sceneCamera = scene.camera
          const sceneAxis = sceneCamera.right
          const sceneTransform = Cesium.Matrix4.fromTranslation(scenePivot)
          olcsCore.rotateAroundAxis(
            sceneCamera,
            options.tilt - sceneAngle,
            sceneAxis,
            sceneTransform,
            {
              duration: duration,
              callback: callback,
            }
          )
        } catch (err) {
          console.log('watch annimations tilting error', err)
        }
        console.log('watch annimations tilting')
      } else {
        view.animate(options, callback)
      }
    },
  },

  methods: {
    coordinate(evt) {
      if (this.olMap3d != undefined) {
        const camera = this.olMap3d.getCamera()
        this.olCoordinations.camera.center = camera.getCenter()
        this.olCoordinations.camera.distance = camera.getDistance()
        this.olCoordinations.camera.heading = camera.getHeading()
        this.olCoordinations.camera.tilt = camera.getTilt()
        this.olCoordinations.camera.position = camera.getPosition()
        this.olCoordinations.camera.altitude = camera.getAltitude()

        const view = this.olMap3d.getOlView()
        this.olCoordinations.view.center = view.getCenter()
        this.olCoordinations.view.rotation = view.getRotation()
        this.olCoordinations.view.zoon = view.getZoom()

        this.olCoordinations.layers.length = 0
        this.olMap2d.getLayers().forEach((layer) => {
          if (layer != null) {
            let id = layer.get('id')
            if (this.olCoordinations.layers.indexOf(id) < 0) {
              this.olCoordinations.layers.push(id)
            }
          }
        })
      }

      if (evt != undefined) {
        this.olCoordinations.pointer = evt.coordinate
      }
      return lodash.cloneDeep(this.olCoordinations)
    },

    mousewheel() {
      // console.log('mousewheel')
    },
    pointermove(evt) {
      // console.log('pointermove')
      this.$emit('coordinate', this.coordinate(evt))
    },
    movestart() {
      // console.log('movestart')
    },
    moveend() {
      // console.log('moveend')
    },
    singleclick(evt) {
      // console.log('singleclick', evt.coordinate)
      this.$emit('coordinate', this.coordinate(evt))

      this.olMap2d.forEachFeatureAtPixel(evt.pixel, (feature) => {
        let features = feature.get('features')
        if (features == undefined) {
          // console.log('singleclick41', feature)
          this.$emit('feature', feature.getProperties())
          return feature
        } else {
          if (features.length == 1) {
            // console.log('singleclick42', features[0])
            this.$emit('feature', features[0].getProperties())
            return features[0]
          }
        }
      })
    },
    change() {
      console.log('change')
    },
    rendercomplete() {
      // console.log('rendercomplete')
      this.$emit('coordinate', this.coordinate())
    },
    postrender() {
      // console.log('postrender')
    },
    propertychange() {
      // console.log('propertychange')
      this.$emit('coordinate', this.coordinate())
    },

    //---------------------------------------
    //
    //---------------------------------------
    addLayer(layer) {
      let exists = this.findLayer(layer.get('id'))
      if (exists == undefined) {
        this.olMap2d.addLayer(layer)
      }
    },

    findLayer(id) {
      let exists = undefined
      this.olMap2d.getLayers().forEach((layer) => {
        if (layer.get('id') == id) exists = layer
      })
      return exists
    },
    refreshLayer(id) {
      let layer = this.findLayer(id)
      if (layer != undefined) {
        if (layer.getSource() != undefined) {
          if (layer.getSource().getSource() != undefined) {
            layer.getSource().getSource().refresh()
          } else {
            layer.getSource().refresh()
          }
        }
      }
    },
    removeLayer(id) {
      let layer = this.findLayer(id)
      if (layer != undefined) {
        this.olMap2d.removeLayer(layer)
      }
    },
    removeLayers() {
      this.olMap2d.getLayers().clear()
    },
  },

  mounted() {
    // / google 좌표계
    proj4.defs(
      'EPSG:3857',
      '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs'
    )

    // UTM-K 좌표계
    proj4.defs(
      'EPSG:5179',
      '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
    )

    // 중부원점(GRS80) [200,000 500,000]
    proj4.defs(
      'EPSG:5181',
      '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs'
    )

    this.olMap2d = new ol.Map({
      target: 'map',
      layers: [], //Layers.layers(this.olCoordinations.map2d),
      view: new ol.View({
        // projection: 'EPSG:3857', //default
        // center: [54300000, 4300000], // 초기 지도 위치 좌표
        center: [0, 0], // 초기 지도 위치 좌표
        zoom: 2,
      }),
      controls: olControl.defaults({
        mouseWheelZoom: false,
        attributionOptions: {
          collapsible: false,
        },
      }),
    })

    this.olMap2d.on('pointermove', this.pointermove)
    this.olMap2d.on('movestart', this.movestart)
    this.olMap2d.on('moveend', this.moveend)
    this.olMap2d.on('singleclick', this.singleclick)
    this.olMap2d.on('mousewheel', this.mousewheel)
    this.olMap2d.on('change', this.change)

    this.olMap2d.on('rendercomplete', this.rendercomplete)
    this.olMap2d.on('postrender', this.postrender)
    this.olMap2d.getLayers().on('propertychange', this.propertychange)

    this.olMap3d = new OLCesium({ map: this.olMap2d })
    const scene = this.olMap3d.getCesiumScene()
    scene.terrainProvider = Cesium.createWorldTerrain()
    this.olMap3d.setEnabled(this.olCoordinations.map3d)

    // setTimeout(() => {
    //   this.olMap2d.addLayer(Layers.osmStandard(true))
    // }, 5000)
  },
}
</script>

<style></style>
