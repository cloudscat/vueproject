import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/cart'
import Address from './pages/address'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'v-cart',    
            component:Cart
        },
        {
            path:'/address',
            name:'v-address',
            component:Address
        }
    ]
})