import Vue from 'vue'
import router from '@/plugins/router'

const BASE_URL = process.env.VUE_APP_AUTHORIZATION

const PREFIX = 'SNGY_CLIENT_SAMPLE_'
const ACCESS_TOKEN = PREFIX + 'ACCESS_TOKEN'
const ID_TOKEN = PREFIX + 'ID_TOKEN'
const TOKEN_TYPE = PREFIX + 'TOKEN_TYPE'
const USERINFO = PREFIX + 'USERINFO'
const USERNAME = PREFIX + 'USERNAME'
const AUTHORIZATION = PREFIX + 'AUTHORIZATION'

export default {
	// 사용자 정보를 요청하여 세션이 남아있는지 체크
	isAuthorization() {
		return Vue.axios({
			headers: {
				Authorization:
					localStorage.getItem(TOKEN_TYPE) +
					' ' +
					localStorage.getItem(ID_TOKEN),
			},
			url: `${BASE_URL}/oauth2/userinfo`,
		})
	},

	// 인증 여부를 반환
	getAuthorization() {
		return localStorage.getItem(AUTHORIZATION)
	},

	// uri가 있으면 해당 provider로 이동하여 로그인 시도 (uri에 callback이 포함됨)
	// uri가 없으면 providers 요청
	login(uri) {
		if (uri == undefined) {
			return Vue.axios({
				url: `${BASE_URL}/oauth2/providers`,
			})
		}
		window.location.href = uri
	},

	// 로그인 성공 시 uri에 정보가 담겨오기 때문에, 현재 route 정보를 참조하여 인증 정보 저장
	logon(route) {
		return new Promise((resolve, reject) => {
			console.log('route', route)
			if (
				route.query['access_token'] != null &&
				route.query['id_token'] != null &&
				route.query['token_type'] != null &&
				route.query['userinfo'] != null &&
				route.query['username'] != null
			) {
				localStorage.setItem(ACCESS_TOKEN, route.query['access_token'])
				localStorage.setItem(ID_TOKEN, route.query['id_token'])
				localStorage.setItem(TOKEN_TYPE, route.query['token_type'])
				localStorage.setItem(USERINFO, route.query['userinfo'])
				localStorage.setItem(USERNAME, route.query['username'])

				// localStorage에 잘 저장되었는지 한 번 더 체크하고, 인증 여부를 저장
				this.isAuthorization()
					.then((res) => {
						localStorage.setItem(AUTHORIZATION, JSON.stringify(res.data))
						resolve(res)
					})
					.catch((err) => {
						reject(err)
					})
			} else {
				reject('reject')
			}
		})
	},

	// 로그아웃 요청
	logout() {
		return Vue.axios({
			url: `${BASE_URL}/oauth2/logout`,
		})
	},

	// 로그오프 요청? 🌟
	// 로그아웃 성공 여부에 따라 route에 result 정보가 담겨오기 때문에 이에 따른 처리가 가능
	logoff(route) {
		return new Promise((resolve, reject) => {
			localStorage.clear()
			console.log('logoff result', route, route.query['result'])
			if (route.query['result'] === 'success') {
				resolve('resolve')
			} else {
				reject('reject')
			}
		})
	},

	// headers 정보 반환
	headers(headers) {
		let value =
			localStorage.getItem(TOKEN_TYPE) + ' ' + localStorage.getItem(ID_TOKEN)
		if (headers == undefined) {
			return { Authorization: value }
		} else {
			if (headers['Authorization'] == undefined) {
				headers['Authorization'] = value
			}
			return headers
		}
	},

	// api 요청 실패 시 handling용
	catch(error) {
		console.log('catch')
		if (error && error.response && error.response.status == 401) {
			let routes = router.getRoutes()
			console.log('routes', router.getRoutes())
			let login = undefined
			for (let i = 0; i < routes.length; i++) {
				console.log('meta' + i, routes[i].meta)
				if (Object.keys(routes[i].meta).length > 0) {
					login = routes[i].meta.login
				}
			}
			if (login != undefined) {
				console.log('catch login', login)
				router.push({ path: login })
			}
		}
	},
}
