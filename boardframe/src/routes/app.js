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
                        component: () => import('@/app/home/Home.vue'),
                        children: [
                            {
                                path: '/app/home/modal',
                                name: '/app/home/modal',
                                component: () => import('@/app/home/modal/CreateModal.vue')
                            },
                        ]
                    },
                ],
            },
        ]
    },

]
