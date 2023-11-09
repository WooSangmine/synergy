export default [
	{
		path: '/',
		component: () => import('@/app/App.vue'),
		meta: {
			intro: '/',
			login: '/oauth2/login',
			error404: '/notfound',
			error500: '/error',
		},
		redirect: '/',
		children: [
			{
				path: '/',
				component: () => import('@/app/index.vue'),
			},
			{
				path: '/notfound',
				component: () => import('@/app/error404.vue'),
			},
			{
				path: '/error',
				component: () => import('@/app/error.vue'),
			},
			{
				path: '/oauth2',
				component: () => import('@/app/oauth2/App.vue'),
				children: [
					{
						path: '/oauth2/login',
						component: () => import('@/app/oauth2/login/Login.vue'),
					},
					{
						path: '/oauth2/logon',
						component: () => import('@/app/oauth2/logon/Logon.vue'),
					},
					{
						path: '/oauth2/logout',
						component: () => import('@/app/oauth2/logout/Logout.vue'),
					},
					{
						path: '/oauth2/logoff',
						component: () => import('@/app/oauth2/logoff/Logoff.vue'),
					},
				],
			},
			{
				path: '/contents',
				component: () => import('@/app/contents/App.vue'),
				redirect: '/contents/main',
				children: [
					{
						path: '/contents/main',
						component: () => import('@/app/contents/main/main.vue'),
					},
					{
						path: '/contents/chart',
						component: () => import('@/app/contents/chart/Chart.vue'),
					},
					{
						path: '/contents/map',
						component: () => import('@/app/contents/map/map.vue'),
					},
					{
						path: '/contents/home',
						component: () => import('@/app/contents/home/home.vue'),
					},
					{
						path: '/contents/vuex',
						component: () => import('@/app/contents/vuex/vuex.vue'),
					},
				],
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/notfound',
	},
]
