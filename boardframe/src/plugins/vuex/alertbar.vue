<template>
	<v-dialog v-model='model' persistent max-width='340'>
		<v-card outlined>
			<v-alert :type='type' :outlined='outlined' :text='text'>
				{{ message }}
			</v-alert>
			<v-card-actions>
				<v-btn depressed tile @click='close' v-if='buttons > 2'>Close</v-btn>
				<v-spacer></v-spacer>
				<v-btn depressed tile @click='cancel' v-if='buttons > 1'>Cancel</v-btn>
				<v-btn depressed tile @click='ok' :color='type' v-if='buttons > 0'>OK</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data: () => ({
		model: false,
		message: '',
		buttons: 3,

		type: 'success',
		outlined: false,
		text: false,
	}),

	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'alertbar') {
				this.message = state.alertbar.message
				this.buttons = state.alertbar.buttons || 3

				this.color = state.alertbar.type || 'info'
				this.outlined = state.alertbar.left ? state.alertbar.outlined : false
				this.text = state.alertbar.text || false

				this.model = state.alertbar.promise == undefined
			}
		})
	},

	methods: {
		close() {
			this.model = false
			this.$store.commit('alertbar', { promise: 'reject' })
		},
		cancel() {
			this.model = false
			this.$store.commit('alertbar', { promise: 'reject' })
		},
		ok() {
			this.model = false
			this.$store.commit('alertbar', { promise: 'resolve' })
		},
	},
}
</script>

<style></style>
