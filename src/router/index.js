import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const City = () => import('views/city/City')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/Home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/detail/:id',
        component: Detail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router