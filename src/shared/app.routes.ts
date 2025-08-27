import {createRouter, createWebHistory, type RouteRecordRaw,} from "vue-router";
import TeacherPage from "../features/teacher/presentations/pages/TeacherPage.vue";
import AuthPage from "../features/auth/presentations/pages/AuthPage.vue";
import TeacherDashboard from "../features/dashboard/presentations/pages/TeacherDashboard.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {path: "", component: TeacherDashboard, meta: {requiresAuth: true}},
    {name: "login", path: "/auth", component: AuthPage, meta: {requiresAuth: false}},
    {
        path: "/teacher",
        component: TeacherPage,
        children: [
            {
                path: "",
                component: TeacherDashboard,
                meta: {requiresAuth: true},
            },
        ],
        meta: {requiresAuth: true},
    },
];

const router = createRouter({
    history: createWebHistory('/fe-istudy-sts/'),
    routes,
});

router.beforeEach((to, _, next) => {
    const isAuthenticated = !!localStorage.getItem("token");

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({name: "login"});
    } else {
        next();
    }
});

// router.onError((error) => {
//   console.error('Router error:', error)
//   // Тут можна показати глобальний error page або пушнути на /error
// })

export default router;
