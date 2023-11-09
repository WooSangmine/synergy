<template>
  <v-container fluid class='pa-8'>
    <v-card class='pa-8'>
      <v-card-title class='text-h2 font-weight-bold mt-12 py-12' style='justify-content: center;'>
        Social Login
      </v-card-title>
      <v-card-text class='mb-12'>
        <v-list>
          <v-list-item two-line style='gap: 24px;'>
            <v-list-item-content v-for='(provider, idx) in providers' :key='idx'>
              <v-list-item-title>
                <v-btn @click='login(provider.uri)' outlined>{{ provider.name }}</v-btn>
              </v-list-item-title>
              <v-list-item-content>
                <div style='width: 100%;'>
                  {{ authorizationUri(provider.uri) }}
                </div>
              </v-list-item-content>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
  data: () => ({
    providers: null,
  }),
  mounted() {
    console.log('login 요청')
    Authorization.login()
        .then((res) => {
          console.log('login success', res.data)
          this.providers = res.data
        })
        .catch((err) => {
          console.log('login catch')
          console.error(err)
        })
  },
  methods: {
    login(uri) {
      Authorization.login(this.authorizationUri(uri))
    },
    authorizationUri(uri) {
      return uri + window.location.origin + '/oauth2/logon'
    },
  },
}
</script>

<style></style>