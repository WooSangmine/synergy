export default [
    {
        path: '/',
        name: '/',
        redirect: '/app',
        component: () => import('@/main.vue'),
        children: [
            {
                path: '/app',
                name: '/app',
                redirect: '/app/home',
                component: () => import('@/app/App.vue'),
                children: [
                    {
                        path: '/app/home',
                        name: '/app/home',
                        component: () => import('@/app/home/home.vue'),
                        children: [
                            {
                                path: '/app/modal',
                                name: '/app/modal',
                                component: () => import('@/app/home/modal/modal.vue'),

                            },
                        ]
                    },
                ],
            },
        ]
    },

]
