<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-divider></v-divider>
      <v-list>
        <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
  data:()=>({
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    drawer: null,
  }),
  components: {
  },
}
</script>
<style>
</style>