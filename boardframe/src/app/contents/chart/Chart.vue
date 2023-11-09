<template>
	<div>
		<v-row>
			<v-col cols='12'>
				<ChartJS
					ref='board1'
					:height='600'
					:options='board1Options'
					:datasets='board1Data'
				></ChartJS>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols='1'>
				<p>Config</p>
			</v-col>
			<v-col cols='5'>
				<v-btn-toggle mandatory>
					<v-btn x-small @click='changeOption1()'>Category</v-btn>
					<v-btn x-small @click='changeOption2()'>Hour</v-btn>
					<v-btn x-small @click='changeOption3()'>Day</v-btn>
					<v-btn x-small @click='changeOption4()'>Month</v-btn>
					<v-btn x-small @click='changeOption5()'>Year</v-btn>
				</v-btn-toggle>
			</v-col>
			<v-col cols='1'>
				<p>Datasets</p>
			</v-col>
			<v-col cols='5'>
				<v-btn x-small @click='changeData1(`bar`)'>Add Bar</v-btn>
				<v-btn x-small @click='changeData1(`line`)'>Add Line</v-btn>
				<v-btn x-small @click='changeData2()'>Change</v-btn>
				<v-btn x-small @click='changeData3()'>Remove</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import ChartJS from './ChartComponent.vue'
import Utils from './ChartSampleData.js'

export default {
	components: {
		ChartJS,
	},
	data: () => ({
		board1Data: [],
		board1Options: [
			{
				title: {
				text: 'My Chart Board',
				},
				legend: {
				position: 'right',
				},
				tooltips: {
				callbacks: {
					label: (item) => `${item.yLabel.toFixed(2)} kW`,
				},
				},
			},
		],

		dataAction: undefined,
		dataSize: undefined,
		dataRange: undefined,
	}),
	methods: {
		addOption(val) {
			this.board1Options.push(val)
		},
		addData(val) {
			this.board1Data.push(val)
		},
		updateData(idx, val) {
			this.board1Data.splice(idx, 1, val)
		},
		removeData(idx) {
			this.board1Data.splice(idx, 1)
		},
		clearData() {
			this.board1Data.splice(0, this.board1Data.length)
		},

		//////////////////////////////
		// 
		//////////////////////////////
		dataIndex() {
			return this.board1Data.length - 1
		},
		dataItem(idx) {
			return this.board1Data[idx]
		},

		//////////////////////////////
		// 
		//////////////////////////////
		changeOption1() {
			this.clearData()
			this.dataAction = 1
			this.dataSize = 7

			this.addOption({
				scales: {
					xAxes: [
						{
							type: 'category',
							labels: ['월', '화', '수', '목', '금', '토', '일'],
						},
					],
				},
			})
		},
		changeOption2() {
			this.clearData()
			this.dataAction = 2
			this.dataSize = 24
			this.dataRange = Utils.dataRange('hour')

			this.addOption({
				scales: {
					xAxes: [
						{
							type: 'time',
							time: {
								unit: 'hour',
								displayFormats: {
									hour: 'HH시',
								},
							},
							ticks: {
								min: this.dataRange.min,
								max: this.dataRange.max,
							},
						},
					],
				},
			})
		},
		changeOption3() {
			this.clearData()
			this.dataAction = 3
			this.dataSize = 20
			this.dataRange = Utils.dataRange('day')

			this.addOption({
				scales: {
					xAxes: [
						{
							type: 'time',
							time: {
								unit: 'day',
								displayFormats: {
									day: 'YYYY-MM-DD',
								},
							},
							ticks: {
								min: this.dataRange.min,
								max: this.dataRange.max,
							},
						},
					],
				},
			})
		},
		changeOption4() {
			this.clearData()
			this.dataAction = 4
			this.dataSize = 12
			this.dataRange = Utils.dataRange('month')

			this.addOption({
				scales: {
					xAxes: [
						{
							type: 'time',
							time: {
								unit: 'month',
								displayFormats: {
									month: 'YYYY-MM',
								},
							},
							ticks: {
								min: this.dataRange.min,
								max: this.dataRange.max,
							},
						},
					],
				},
			})
		},
		changeOption5() {
			this.clearData()
			this.dataAction = 5
			this.dataSize = 5
			this.dataRange = Utils.dataRange('year')

			this.addOption({
				scales: {
					xAxes: [
						{
							type: 'time',
							time: {
								unit: 'year',
								displayFormats: {
									year: 'YYYY',
								},
							},
							ticks: {
								min: this.dataRange.min,
								max: this.dataRange.max,
							},
						},
					],
				},
			})
		},

		changeData1(type) {
			let val = {
				type: type,
				label: 'Chart #' + Utils.randomInt(),
				data: this.dataAction == 1
					? Utils.randomIntArray(this.dataSize)
					: Utils.randomDateArray(this.dataSize, this.dataRange),
			}
			this.addData(val)
		},
		changeData2() {
			if (this.dataIndex() < 0) return
			let idx = this.dataIndex()
			let val = this.dataItem(idx)
			val.data = this.dataAction == 1
				? Utils.randomIntArray(this.dataSize)
				: Utils.randomDateArray(this.dataSize, this.dataRange)
			this.updateData(idx, val)
		},
		changeData3() {
			if (this.dataIndex() < 0) return
			let idx = this.dataIndex()
			this.removeData(idx)
		},
	},
	mounted() {
		this.changeOption1()
	},
}
</script>

<style></style>
