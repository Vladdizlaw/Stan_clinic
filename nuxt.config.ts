import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'STAN-CLINIC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'stan-clinic landing page'
      }
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/global.css'],
   
    plugins: [
        '@/plugins/vmask.js',
      ],
      ssr: true,
      target: 'server',
    
    axios: {
        baseURL: '/'
      },
    // serverMiddleware: [
    //     { path: "/api", handler: "~/api/index.js" },
    //   ],
})
