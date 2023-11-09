<script>
import lodash from 'lodash'
import { Bar } from 'vue-chartjs'

export default {
	extends: Bar,
	
	props: {
		options: {
			type: Array,
		},
		datasets: {
			type: Array,
		},
	},

	data: () => ({
		backgroundColors: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 205, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(201, 203, 207, 0.2)',
		],
		borderColors: [
			'rgb(255, 99, 132)',
			'rgb(255, 159, 64)',
			'rgb(255, 205, 86)',
			'rgb(75, 192, 192)',
			'rgb(54, 162, 235)',
			'rgb(153, 102, 255)',
			'rgb(201, 203, 207)',
		],
		renderData: {
			datasets: [],
		},
		renderOptions: {
			title: {
				display: true,
				// text : 'title'
			},
			legend: {
				display: true,
				// position: 'top',
			},
			//     tooltips: {
			//       callbacks: {
			//         label: (item) => `${item.yLabel.toFixed(2)} `,
			//       },
			//     },
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
						gridLines: {
							display: true,
						},
					},
				],
				xAxes: [
					{
						ticks: {
							beginAtZero: true,
							// min: min,
							// max: max,
						},
						gridLines: {
							display: true,
						},
						// type: 'category',
						// labels: ['a', 'b', 'c'],
						// time: {
						//   // unit: timeunit,
						//   displayFormats: {
						//     day: 'YYYY-MM-DD',
						//     hour: 'HH',
						//   },
						// },
					},
				],
			},
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
		},
		colorSeq: -1,
	}),

	methods: {
		colorIndex() {
			this.colorSeq++
			return this.colorSeq % 7
		},
	},

	computed: {
		renderChartData() {
			this.datasets.forEach((dataset) => {
				if (dataset.backgroundColor == undefined) {
					let idx = this.colorIndex()
					dataset['backgroundColor'] = this.backgroundColors[idx]
					dataset['borderColor'] = this.borderColors[idx]
					dataset['borderWidth'] = 1
					dataset['tension'] = 0
					dataset['fill'] = 'line' != dataset.type
				}
			})
			this.$set(this.renderData, 'datasets', this.datasets)
			return this.renderData
		},
		renderChartOptions() {
			this.options.forEach((item) => {
				lodash.merge(this.renderOptions, item)
			})
			return this.renderOptions
		},
	},

	watch: {
		datasets() {
			this.renderChart(this.renderChartData, this.renderChartOptions)
		},
		options: {
			handler() {
				this.renderChart(this.renderChartData, this.renderChartOptions)
			},
		},
	},

	mounted() {
		this.renderChart(this.renderChartData, this.renderChartOptions)
	},
}
</script>

<style></style>
