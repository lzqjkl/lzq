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
        },
        {
          path: '/codingsettings',
          component: () => import('./views/Commodity/Codingsettings.vue'),
        },{
          path: '/returnorder',
          component: () => import('./views/Purchase/Returnorder.vue'),
        },{
          path: '/storage',
          component: () => import('./views/Inventory/Storage.vue'),
        },{
          path: '/newchudan',
          component: () => import('./views/Public/Newchudan.vue'),
        },{
          path: '/inventorypull',
          component: () => import('./views/Inventory/Inventorypull.vue'),
        },{
          path: '/library',
          component: () => import('./views/Inventory/library.vue'),
        },{
          path: '/inventorycounting',
          component: () => import('./views/Inventory/Inventorycounting.vue'),
        },{
          path: '/inventorydetails',
          component: () => import('./views/Inventory/Inventorydetails.vue'),
        },{
          path: '/SpInventory',
          component: () => import('./views/Inventory/SpInventory.vue'),
        },{
          path: '/orderpromotion',
          component: () => import('./views/Promotion/Orderpromotion.vue'),
        },{
          path: '/merchandisepromotion',
          component: () => import('./views/Promotion/Merchandisepromotion.vue'),
        },{
          path: '/file',
          component: () => import('./views/Commodity/File.vue'),
        }
      ]
    }
  ]
})