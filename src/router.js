import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/gong'
    }, 
    {
      path: '/gong',
      component: () => import('./views/Public/gong.vue'),
      children:[
        {
          path: '/gong',
          component: () => import('./views/Commodity/Product classification.vue'),
        },
        {
          path: '/product classification',
          component: () => import('./views/Commodity/Product classification.vue'),
        },
        {
          path: '/merchandise brand',
          component: () => import('./views/Commodity/Merchandise brand.vue'),
        },
        {
          path: '/commodity units',
          component: () => import('./views/Commodity/Commodity units.vue'),
        },
        {
          path: '/picturegallery',
          component: () => import('./views/Commodity/Picturegallery.vue'),
        },
        {
          path: '/suppliermanagement',
          component: () => import('./views/Purchase/Suppliermanagement.vue'),
        },
        {
          path: '/newsuppliers',
          component: () => import('./views/Public/Newsuppliers.vue'),
        },
        {
          path: '/salesorders',
          component: () => import('./views/Retail/Salesorders.vue'),
        },
        {
          path: '/level',
          component: () => import('./views/Member/Level.vue'),
        },
        {
          path: '/category',
          component: () => import('./views/Public/Category.vue'),
        },
        {
          path: '/purchaseorder',
          component: () => import('./views/Purchase/Purchaseorder.vue'),
        }
      ]
    }
  ]
})
