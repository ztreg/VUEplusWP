
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/about',
        name: 'About',
        component: () => import('pages/About.vue')
      },
      {
        path: '/about/:id',
        name: 'AboutId',
        component: () => import('pages/About.vue')
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('pages/Product.vue')
      },
      {
        path: '/product/:id',
        name: 'ProductId',
        component: () => import('pages/Product.vue')
      },
      {
        path: '/why',
        name: 'Why',
        component: () => import('pages/Why.vue')
      },
      {
        path: '/why/:id',
        name: 'WhyId',
        component: () => import('pages/Why.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('pages/Blog.vue')
      },
      {
        path: '/blog/:id',
        name: 'BlogPost',
        component: () => import('pages/SingleBlogPost.vue')
      },
      {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: () => import('pages/PrivacyPolicy.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
