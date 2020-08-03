
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/test', component: () => import('pages/test.vue') },
      {
        path: '/spacey',
        name: 'Spacey',
        component: () => import('pages/Spacey.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('pages/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('pages/Contact.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
