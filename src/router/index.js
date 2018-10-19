import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUs from '@/components/AboutUs'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/acercade',
            name: 'aboutus',
            component: AboutUs,
        },
        {
            path: '/portafolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/contacto',
            name: 'contact',
            component: Contact,
        },
    ]
})
