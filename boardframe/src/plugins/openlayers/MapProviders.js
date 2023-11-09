export default {
	layers() {
		let names = []
		Object.keys(this).forEach((key) => {
			if ('layers' != key) {
				names.push(key)
			}
		})
		return names
	},

	// ------------------------------
	// OSM(OpenStreetMap)
	// ------------------------------
	// osm standard
	// var osmStandardLayer = new olLayer.Tile({
	//     source: new olSource.OSM()
	// })
	// map.addLayer(osmStandardLayer)
	osmStandard: {
		projection: 'EPSG:3857',
		url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	osmCyclosm: {
		projection: 'EPSG:3857',
		url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	osmHumanitarian: {
		projection: 'EPSG:3857',
		url: 'https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	// ------------------------------
	// google layers
	// ------------------------------
	googleRoad: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	googleTerrain: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	googleAlteredRoad: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	googleSatellite: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	googleTerrainOnly: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=t&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	googleHybrid: {
		projection: 'EPSG:3857',
		url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
		crossOrigin: 'anonymous',
	},

	// ------------------------------
	// Bing layers
	// ------------------------------
	bingAerial: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['Aerial'],
	},
	bingAerialWithLabels: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['AerialWithLabels'],
	},
	bingAerialWithLabelsOnDemand: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['AerialWithLabelsOnDemand'],
	},
	bingBirdseye: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['Birdseye'],
	},
	bingBirdseyeWithLabels: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['BirdseyeWithLabels'],
	},
	bingBirdseyeV2: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['BirdseyeV2'],
	},
	bingBirdseyeV2WithLabels: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['BirdseyeV2WithLabels'],
	},
	bingCanvasDark: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['CanvasDark'],
	},
	bingCanvasLight: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['CanvasLight'],
	},
	bingCanvasGray: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['CanvasGray'],
	},
	bingOrdnanceSurvey: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['OrdnanceSurvey'],
	},
	bingRoad: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['Road'],
	},
	bingRoadOnDemand: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['RoadOnDemand'],
	},
	bingStreetside: {
		culture: 'ko-KR',
		key: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
		imagerySet: ['Streetside'],
	},

	// ------------------------------
	// open weather rmap
	// ------------------------------
	owm_clouds_new: {
		url: 'https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=eff701ff0324d1618bddb25c62adab16',
		tileOptions: {
			crossOriginKeyword: 'anonymous',
		},
		crossOrigin: null,
	},
	owm_precipitation_new: {
		url: 'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=eff701ff0324d1618bddb25c62adab16',
		tileOptions: {
			crossOriginKeyword: 'anonymous',
		},
		crossOrigin: null,
	},
	owm_pressure_new: {
		url: 'https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=eff701ff0324d1618bddb25c62adab16',
		tileOptions: {
			crossOriginKeyword: 'anonymous',
		},
		crossOrigin: null,
	},
	owm_wind_new: {
		url: 'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=eff701ff0324d1618bddb25c62adab16',
		tileOptions: {
			crossOriginKeyword: 'anonymous',
		},
		crossOrigin: null,
	},
	owm_temp_new: {
		url: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=eff701ff0324d1618bddb25c62adab16',
		tileOptions: {
			crossOriginKeyword: 'anonymous',
		},
		crossOrigin: null,
	},

	// ------------------------------
	// vworld layers
	// ------------------------------
	vworldBase: {
		projection: 'EPSG:3857',
		url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
		// url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	vworldSatellite: {
		projection: 'EPSG:3857',
		url: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg',
		crossOrigin: 'anonymous',
	},

	vworldHybrid: {
		projection: 'EPSG:3857',
		url: 'https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	vworldGray: {
		projection: 'EPSG:3857',
		url: 'https://xdworld.vworld.kr/2d/gray/service/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},

	vworldMidnight: {
		projection: 'EPSG:3857',
		url: 'https://xdworld.vworld.kr/2d/midnight/service/{z}/{x}/{y}.png',
		crossOrigin: 'anonymous',
	},
}
