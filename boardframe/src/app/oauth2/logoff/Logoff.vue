<template>
  <v-progress-circular indeterminate></v-progress-circular>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
  data: () => ({}),
  mounted() {
    console.log('logoff : 로그아웃 성공 시 정보 초기화')
    Authorization.logoff(this.$route)
        .then(() => {
          console.log('logoff success')
        })
        .catch((err) => {
          console.log('logoff catch')
          console.error(err)
        })
        .finally(() => {
          this.$router.push({ path: '/' })
        })
  },
  methods: {},
}
</script>

<style></style>