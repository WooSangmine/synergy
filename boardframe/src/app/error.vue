<template>
	<div>
		<v-btn @click='refresh'>500 Refresh</v-btn>
	</div>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
	data: () => ({}),
    mounted() {},
	methods: {
		refresh() {
			console.log('로그인 여부 재확인 : ')
			Authorization.isAuthorization()
				.then(() => {
					console.log('YES -> /contents')
					this.$router.push({ path: '/contents' })
				})
				.catch(() => {
					console.log('NO -> /')
					this.$router.push({ path: '/' })
				})
		},
	},
}
</script>

<style></style>
