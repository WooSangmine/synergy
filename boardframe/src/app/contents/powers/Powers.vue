<template>
	<div class='ma-4'>
		<div class='text-h5 font-weight-bold pb-4'>Powers</div>
		<v-container>
			<v-row
				v-for='power in powers'
				:key='power.id'
			>
				<v-col>title : {{ power.title }}</v-col>
				<v-col>value : {{ power.value }}</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Authorization from '@/app/com.u2ware.oauth2.jwt.authorizationserver.js'
import Resource from '@/app/com.u2ware.oauth2.jwt.resourceserver.js'

export default {
	data: () => ({
		powers: [],
	}),
	mounted() {
		console.log('powers 데이터 get 요청')
		Resource.powers
			.read(Authorization.headers())
			.then((res) => {
				console.log('powers: ', res.data._embedded.powers)
				this.powers = res.data._embedded.powers
			})
			.catch((err) => {
				console.log('powers catch')
				console.error(err)
				Authorization.catch(err)
			})
	},
	methods: {},
}
</script>

<style>
.col {
	border: 1px solid #aaa;
}
</style>
