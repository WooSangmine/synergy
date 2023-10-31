<template>
	<v-progress-circular indeterminate></v-progress-circular>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
	data: () => ({}),
	mounted() {
		console.log('logon : 로그인 성공 시 정보 저장')
		Authorization.logon(this.$route)
			.then(() => {
				console.log('logon success')
				this.$router.push({ path: '/contents' })
			})
			.catch((err) => {
				console.log('logon catch')
				console.error(err)
				this.$router.push({ path: '/oauth2/login' })
			})
	},
	methods: {},
}
</script>

<style></style>
