<template>
	<v-snackbar
		v-model='model'
		:color='color'
		:elevation='elevation'
		:multi-line='multiLine'
		:timeout='timeout'
		:left='left'
		:right='right'
		:top='top'
		:bottom='bottom'
		:centered='centered'
		:outline='outline'
		:text='text'
		:shaped='shaped'
		:vertical='vertical'
		@input='close'
	>
		{{ message }}
		<template v-slot:action='{ attrs }'>
			<v-btn text v-bind='attrs' @click='close'>Close</v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {
	data: () => ({
		model: false,
		message: '',

		timeout: -1,
		color: 'primary',
		elevation: '24',
		multiLine: false,

		left: false,
		right: false,
		top: false,
		bottom: false,
		centered: true,

		shaped: false,

		outline: false,
		text: false,
		vertical: false,
	}),
	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'snackbar') {
				// console.log(state.snackbar)

				this.message = state.snackbar.message

				this.timeout = state.snackbar.timeout || -1

				this.color = state.snackbar.color || 'primary'

				this.elevation = state.snackbar.elevation || '24'
				this.multiLine = state.snackbar.multiLine || false
				this.left = state.snackbar.left || false
				this.right = state.snackbar.right || false
				this.top = state.snackbar.top || false
				this.bottom = state.snackbar.bottom || false

				this.centered = state.snackbar.centered || true
				this.shaped = state.snackbar.shaped || false
				this.outline = state.snackbar.outline || false
				this.text = state.snackbar.text || false
				this.vertical = state.snackbar.vertical || false

				this.model = state.snackbar.promise == undefined
			}
		})
	},

	methods: {
		close() {
			this.model = false
			this.$store.commit('snackbar', { promise: 'resolve' })
		},
	},
}
</script>
