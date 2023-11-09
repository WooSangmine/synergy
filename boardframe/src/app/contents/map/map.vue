<template>
  <div>
    <v-row no-gutters>
      <v-col cols='10'>
        <v-row no-gutters>
          <MapView
              ref='myMap'
              width='100%'
              height='750px'
              :annimations='annimations'
              @coordinate='coordinate'
              @feature='feature'
          />
        </v-row>
        <v-row no-gutters>
          <v-col cols='4'>
            <!-- <v-select
              x-small
              :items='coordinations.layers'
              v-model='coordinations.map2d'
              @change='action1'
            ></v-select> -->

            <v-autocomplete
                v-model='selectedLayers'
                :items='layers'
                outlined
                dense
                chips
                deletable-chips
                multiple
                @change='action1'
            />
          </v-col>
          <v-col cols='4'>
            <v-btn x-small @click='action2()'>Add Image Layer</v-btn>
            <v-btn x-small @click='action3()'>Add Vector Layer</v-btn>
            <v-btn x-small @click='action4()'>Refresh Vector Vector</v-btn>
          </v-col>
          <v-col cols='4' align='right'>
            <v-btn-toggle mandatory v-model='coordinations.map3d'>
              <v-btn x-small :value='false' @click='annimation1(false)'>
                2D
              </v-btn>
              <v-btn x-small :value='true' @click='annimation1(true)'>
                3D
              </v-btn>
            </v-btn-toggle>
            <v-btn x-small @click='annimation2()'>Change 2D, 3D</v-btn>
            <v-btn x-small @click='annimation3()'>annimation1</v-btn>
            <v-btn x-small @click='annimation4()'>annimation2</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols='2'>
        <!-- <v-text-field v-model='pointer' /> -->
        <pre class='caption'>{{ coordinations }}</pre>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MapView from '@/plugins/openlayers/MapView.vue'
import MapProviders from '@/plugins/openlayers/MapProviders.js'
import MapLayers from '@/plugins/openlayers/MapLayers.js'
import MapStyles from '@/plugins/openlayers/MapStyles.js'

import { transform } from 'ol/proj.js'
import axios from 'axios'

export default {
  components: { MapView },
  data: () => ({
    annimations: [],
    coordinations: {},

    selectedLayers: [],
    layers: MapProviders.layers(),

    imageLayerId: 'https://imgs.xkcd.com/comics/online_communities.png',
    vactorLayerId: 'aaaa',
    // vactorLayerId: 'bbbb',
  }),

  methods: {
    coordinate(coordinations) {
      this.coordinations = coordinations
    },

    feature(features) {
      alert('feature')
      console.log('feature', features)
    },

    //////////////////////////////////
    //
    //////////////////////////////////
    action1(ids) {
      this.$refs.myMap.removeLayers()

      ids.forEach((id) => {
        let layer = MapLayers.tileXYZLayer().id(id).build()
        this.$refs.myMap.addLayer(layer)
      })
    },

    action2() {
      const layer = MapLayers.imageStaticLayer()
          .id(this.imageLayerId)
          .extent(12800000, 12800000)
          .build()
      this.$refs.myMap.addLayer(layer)
      this.layers.push(this.imageLayerId)
      this.selectedLayers.push(this.imageLayerId)
    },

    action3() {
      const url =
          process.env.VUE_APP_GEOSERVER +
          '?service=WFS' +
          '&version=1.1.1' +
          '&request=GetFeature' +
          // '&typename=sngy:geometries2' +
          '&typename=sngy:io_sngy_base_infra_features_view' +
          '&outputFormat=application/json' +
          '&exceptions=application/json' +
          '&srsname=EPSG:3857' +
          '&viewParams=layer:' +
          this.vactorLayerId

      const layer = MapLayers.geoJsonLayer()
          .id(this.vactorLayerId)
          .url(url)
          .promise(axios({ url: '/' }))
          .cluster((features) => {
            return MapStyles.style()
                .image(MapStyles.circle(30).build())
                .text(MapStyles.text(features.length.toString()).build())
                .build()
          })
          .style((feature, promise) => {
            // return s1 or s2
            if (feature.getStyle() == null) {
              console.log('style....', feature, promise)
              // let s1 = FeatureStyles.of()
              //   .image(FeatureStyles.icon().build())
              //   .text(FeatureStyles.text('hello').build())
              //   .build()
              let s2 = MapStyles.style()
                  .image(MapStyles.circle().build())
                  .text(MapStyles.text('hello').build())
                  .build()

              feature.setStyle(s2)
            }
            return feature.getStyle()
          })
          .build()

      this.$refs.myMap.addLayer(layer)
      this.layers.push(this.vactorLayerId)
      this.selectedLayers.push(this.vactorLayerId)
    },
    action4() {
      this.$refs.myMap.refreshLayer(this.vectorName)
    },

    ///////////////////////////
    //
    ///////////////////////////
    annimation1(map3d) {
      this.annimations.push({
        map3d: map3d,
      })
    },
    annimation2() {
      let v = this.coordinations.map3d
      this.annimations.push({
        map3d: !v,
        duration: 2000,
        callback: () => {
          this.annimations.push({
            map3d: v,
            duration: 2000,
          })
        },
      })
    },

    annimation3() {
      let center = [0, 0]
      let zoom = 2
      // let rotation = Math.PI * (3 / 4)

      this.annimations.push({
        tilt: 0.3,
        duration: 5000,
        callback: () => {
          this.annimations.push({
            center: center,
            zoom: zoom,
            duration: 5000,
          })
        },
      })
    },
    annimation4() {
      let center = transform(
          [128.67921923942566, 35.82838472156525],
          'EPSG:4326',
          'EPSG:3857'
      )
      // let center = [54300000, 4300000]
      // projection: 'EPSG:4326',
      // // center: [128.0162353515625, 36.5992431640625], // 중점
      // // zoom: 8,
      // center: [128.67921923942566, 35.82838472156525], //대구
      // zoom: 18,
      // center: transform([25, 20], 'EPSG:4326', 'EPSG:3857'),
      // minZoom: 8,
      // maxZoom: 20

      let zoom = 8
      // let rotation = Math.PI / 4
      this.annimations.push({
        center: center,
        zoom: zoom,
        // rotation: rotation,
        duration: 10000,
      })
    },
  },

  mounted() {},
}
</script>

<style></style>
