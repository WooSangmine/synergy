import moment from "moment"

export default {
	randomInt() {
		let min = Math.ceil(0)
		let max = Math.floor(100)
		return Math.floor(Math.random() * (max - min + 1)) + min
	},

	randomIntArray(size) {
		let a = []
		for (let i = 0; i < size; i++) {
			a.push(this.randomInt())
		}
		return a
	},

	dataRange(time) {
		if ("hour" == time) {
			return {
				min: moment()
					.clone()
					.startOf("day")
					.startOf("hour")
					.startOf("minute")
					.startOf("seconds")
					.toDate(),
				max: moment()
					.clone()
					.endOf("day")
					.endOf("hour")
					.endOf("minute")
					.endOf("seconds")
					.toDate(),
			}
		} else if ("day" == time) {
			return {
				min: moment()
					.clone()
					.startOf("month")
					.startOf("day")
					.startOf("hour")
					.startOf("minute")
					.startOf("seconds")
					.toDate(),
				max: moment()
					.clone()
					.endOf("month")
					.endOf("day")
					.endOf("hour")
					.endOf("minute")
					.endOf("seconds")
					.toDate(),
			}
		} else if ("month" == time) {
			return {
				min: moment()
					.clone()
					.startOf("year")
					.startOf("month")
					.startOf("day")
					.startOf("hour")
					.startOf("minute")
					.startOf("seconds")
					.toDate(),
				max: moment()
					.clone()
					.endOf("year")
					.endOf("month")
					.endOf("day")
					.endOf("hour")
					.endOf("minute")
					.endOf("seconds")
					.toDate(),
			}
		} else if ("year" == time) {
			return {
				min: moment()
					.clone()
					.add(-4, "y")
					.startOf("year")
					.startOf("month")
					.startOf("day")
					.startOf("hour")
					.startOf("minute")
					.startOf("seconds")
					.toDate(),
				max: moment()
					.clone()
					.endOf("year")
					.endOf("month")
					.endOf("day")
					.endOf("hour")
					.endOf("minute")
					.endOf("seconds")
					.toDate(),
			}
		}
	},

	randomDate(dataRange) {
		return new Date(
			dataRange.min.getTime() +
				Math.random() * (dataRange.max.getTime() - dataRange.min.getTime())
		)
	},

	randomDateArray(size, dataRange) {
		let a = []
		for (let i = 0; i < size; i++) {
			a.push(this.randomDate(dataRange))
		}

		let b = []
		a.sort((a, b) =>
			moment(a).format("YYYYMMDDHHmmss") - moment(b).format("YYYYMMDDHHmmss")
		).forEach((t) => {
			console.log(t)
			b.push({
				x: t,
				y: this.randomInt(),
			})
		})
		return b
	},
}
