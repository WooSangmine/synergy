<template>
  <v-card>
    <v-card-title>Are you sure?</v-card-title>
    <v-card-actions>
      <v-btn rounded @click='logout()'>OK</v-btn>
      <v-btn rounded to='/contents'>Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
  data: () => ({}),
  mounted() {},
  methods: {
    logout() {
      console.log('logout 요청')
      Authorization.logout()
          .then((res) => {
            console.log('logout success', res)
            this.$router.push({ path: '/oauth2/logoff?result=success' })
          })
          .catch((err) => {
            console.log('logout failure')
            console.error(err)
            this.$router.push({ path: '/oauth2/logoff?result=failure' })
          })
    },
  },
}
</script>

<style></style>