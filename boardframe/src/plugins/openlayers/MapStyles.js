import {
    Circle,
    RegularShape,
    Icon,
    Fill,
    Stroke,
    Style,
    Text,
} from 'ol/style.js'
// import * as olSize from 'ol/size'

const FillBuilder = function () {
    this._color = '#3399CC'
}
FillBuilder.prototype.color = function (color) {
    if (color != undefined) this._color = color
    return this
}
FillBuilder.prototype.build = function () {
    return new Fill({
        color: this._color,
    })
}

const StrokeBuilder = function () {
    this._color = '#fff'
}
StrokeBuilder.prototype.color = function (color) {
    if (color != undefined) this._color = color
    return this
}
StrokeBuilder.prototype.build = function () {
    return new Stroke({
        color: this._color,
    })
}

const TextBuilder = function () {
    this._text = '' //white
    this._font = 18 //white
    this._fill = new FillBuilder().color('#fff').build()
}
TextBuilder.prototype.text = function (text) {
    if (text != undefined) this._text = text
    return this
}
TextBuilder.prototype.font = function (font) {
    if (font != undefined) this._font = font
    return this
}
TextBuilder.prototype.fill = function (fill) {
    if (fill != undefined) this._fill = fill
    return this
}
TextBuilder.prototype.build = function () {
    return new Text({
        font: this._font + 'px sans-serif',
        text: this._text,
        fill: this._fill,
    })
}

const RegularShapeBuilder = function () {
    this._points = 4
    this._radius = 10
    this._rotation = Math.PI / 4
    this._stroke = new StrokeBuilder().color('#fff').build()
    this._fill = new FillBuilder().color('#3399CC').build()
}
RegularShapeBuilder.prototype.points = function (points) {
    if (points != undefined) this._points = points
    return this
}
RegularShapeBuilder.prototype.radius = function (radius) {
    if (radius != undefined) this._radius = radius
    return this
}
RegularShapeBuilder.prototype.rotation = function (rotation) {
    if (rotation != undefined) this._rotation = rotation
    return this
}
RegularShapeBuilder.prototype.stroke = function (stroke) {
    if (stroke != undefined) this._stroke = stroke
    return this
}
RegularShapeBuilder.prototype.fill = function (fill) {
    if (fill != undefined) this._fill = fill
    return this
}
RegularShapeBuilder.prototype.build = function () {
    return new RegularShape({
        points: this._points,
        radius: this._radius,
        rotation: this._rotation,
        stroke: this._stroke,
        fill: this._fill,
    })
}

const CircleBuilder = function () {
    this._radius = 10
    this._stroke = new StrokeBuilder().color('#fff').build()
    this._fill = new FillBuilder().color('#3399CC').build()
}
CircleBuilder.prototype.radius = function (radius) {
    if (radius != undefined) this._radius = radius
    return this
}
CircleBuilder.prototype.stroke = function (stroke) {
    if (stroke != undefined) this._stroke = stroke
    return this
}
CircleBuilder.prototype.fill = function (fill) {
    if (fill != undefined) this._fill = fill
    return this
}
CircleBuilder.prototype.build = function () {
    return new Circle({
        radius: this._radius,
        stroke: this._stroke,
        fill: this._fill,
    })
}

const logo = process.env.VUE_APP_SNGY_ICON

const IconBuilder = function () {
    this._src = logo
    this._scale = 0.1
}
IconBuilder.prototype.src = function (src) {
    if (src != undefined) this._src = src
    return this
}
IconBuilder.prototype.scale = function (scale) {
    if (scale != undefined) this._scale = scale
    return this
}
IconBuilder.prototype.build = function () {
    return new Icon({
        scale: this._scale,
        src: this._src,
        crossOrigin: 'anonymous',
    })
}

const StyleBuilder = function () {
    this._image = undefined
    this._text = undefined
}
StyleBuilder.prototype.image = function (image) {
    this._image = image
    return this
}
StyleBuilder.prototype.text = function (text) {
    this._text = text
    return this
}
StyleBuilder.prototype.build = function () {
    if (this._text != undefined) {
        return new Style({ image: this._image, text: this._text })
    } else {
        return new Style({ image: this._image })
    }
}

export default {
    circle(radius) {
        return new CircleBuilder().radius(radius)
    },
    rectangle(radius) {
        return new RegularShapeBuilder().radius(radius)
    },
    icon(src) {
        return new IconBuilder().src(src)
    },
    text(text) {
        return new TextBuilder().text(text)
    },

    style() {
        return new StyleBuilder()
    },
}
