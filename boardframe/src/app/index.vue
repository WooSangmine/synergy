<template>
	<v-container fluid class='pa-8'>
		<v-card class='pa-8'>
			<v-card-title class='text-h2 font-weight-bold mt-12 py-12' style='justify-content: center;'>
				Welcome!
			</v-card-title>
			<v-card-text class='d-flex mb-12 py-12' style='justify-content: center;'>
				<v-btn to='/oauth2/login' outlined>Go to Login</v-btn>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'

export default {
	data: () => ({}),
	mounted() {
		console.log('로그인 여부 확인 : ')
		Authorization.isAuthorization()
			.then(() => {
				console.log('YES -> /contents')
				this.$router.push({ path: '/contents' })
			})
			.catch(() => {
				console.log('NO')
			})
	},
	methods: {},
}
</script>

<style></style>
