<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-divider></v-divider>
      <v-list>
        <router-link to="home" style="text-decoration: none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/oauth2/login" style="text-decoration: none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>로그인</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="SignUp" style="text-decoration: none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>회원가입</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to='/oauth2/logout' style="text-decoration: none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
  }),
  mounted() {},
  methods: {},

}
</script>
<style>
</style>