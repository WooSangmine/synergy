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

        <v-list-item link @click="onclick">

          <v-list-item-icon>
            <v-icon>  mdi-pencil</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>글 쓰기</v-list-item-title>
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
    <Cmodal ref="Modal_save" />
  </v-main>
  </v-app>
</template>

<script>
import Cmodal from "@/app/home/modal/CreateModal.vue"
export default {
  name: 'App',
  components: {
    Cmodal
  },
  data:()=>({
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    drawer: null,
  }),
  methods: {
    onclick() {
      this.$refs.modal_save.toggleIsOpen();
    }
  },
}
</script>
<style>
</style>