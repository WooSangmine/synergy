<template>
  <v-app>
    <v-app-bar app color='white' height='80'>
    <v-avatar class='mr-3' size='56'>
      <v-img contain max-height='100%' src='@/assets/synergyLogo.png'></v-img>
    </v-avatar>
    <v-toolbar-title class='font-weight-black headline'>
      Synergy - xEMS
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color='primary' @click='$router.push(`/contents/home`)'>
      게시판 (으)로 가기
    </v-btn>
      <v-btn color='primary' @click='$router.push(`/contents/vuex`)'>
        Vuex (으)로 가기
      </v-btn>
      <v-btn color='primary' @click='$router.push(`/contents/chart`)'>
      차트 (으)로 가기
      </v-btn>
      <v-btn color='primary' @click='$router.push(`/contents/map`)'>
        지도 (으)로 가기
      </v-btn>
      <v-btn color='primary' @click='$router.push(`/contents/main`)'>
        메인 (으)로 가기
      </v-btn>
      <v-btn color='primary' @click='$router.push(`/oauth2/logout`)'>
        로그아웃
      </v-btn>
  </v-app-bar>

    <v-main>
        <router-view/>
    </v-main>

    <snackbar />
    <alertbar />
  </v-app>
</template>

<script>
import snackbar from "@/plugins/vuex/snackbar.vue";
import alertbar from "@/plugins/vuex/alertbar.vue";
export default {
  name: 'App',
  components: {
    snackbar,
    alertbar,
  },
  data: () => ({
    drawer: null,
  }),
  mounted() {},
  methods: {},

}
</script>
<style>
.v-btn {
  margin-left: 5px;
}
</style>