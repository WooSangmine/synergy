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
                        component: () => import('@/app/home/Home.vue')
                    },
                    {
                        path: '/app/modal',
                        name: '/app/modal',
                        component: () => import('@/app/modal/modal.vue')
                    },
                ],
            },
        ]
    },
]
