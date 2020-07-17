import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import Counts from '../views/Counts.vue'
import EachOne from '../views/Each.vue'
import c404 from '../views/404.vue'
import Task from '../views/Task.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tasks',
        name: 'teachers',
        component: Teachers
    },
    {
        path: '/students',
        name: 'students',
        component: Students
	},
	{
        path: '/counts',
        name: 'counts',
        component: Counts
    },
    {
        path: '/single/:cat/:id',
        name: 'eachone',
        component: EachOne,
    },
    {
        path: '*',
        component: c404,
	},
	{
        path: '/task',
        name: 'task',
        component: Task
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router