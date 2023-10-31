<template>
	<v-app>
		<router-view></router-view>
	</v-app>
</template>

<script>
export default {
    mounted() {
		this.$vuetify.theme.dark = true
    },
}
</script>

<style></style>
