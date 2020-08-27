require('dotenv').config()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
   color: '#00C6CF',
   height: '2px',
  },
 
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  "@/plugins/vue-lazyload"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
     ['@nuxtjs/robots', {
      UserAgent: '*',
     Disallow: '/',
     }],
    '@nuxtjs/axios',
  ],
  webfontloader: {
    google: {
      families: ['Inter:400,500,600,700,800'],
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  optimizedImages: {
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
  },
  pwa: {
  manifest: {
    name: 'Moviehub',
    short_name: 'Moviehub',
    start_url: '/',
    description: 'Find Movies Online, Find TV Show Online',
    theme_color: '#00C6CF',
    lang: 'en',
    display: 'standalone',
  },
  workbox: {
  runtimeCaching: [
    {
      urlPattern: 'https://api.themoviedb.org/.*',
      handler: 'staleWhileRevalidate',
      method: 'GET',
      strategyOptions: { cacheExpiration: {maxEntries: 10, maxAgeSeconds: 7 * 24 * 60 * 60}, cacheName: 'api-cache', cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: 'https://fonts.googleapis.com/.*',
      handler: 'staleWhileRevalidate',
      method: 'GET',
      strategyOptions: { cacheExpiration: {maxEntries: 10, maxAgeSeconds: 7 * 24 * 60 * 60}, cacheName: 'api-cache', cacheableResponse: { statuses: [0, 200] } }
    },
    {
      urlPattern: 'https://image.tmdb.org/.*',
      handler: 'staleWhileRevalidate',
      method: 'GET',
      strategyOptions: { cacheExpiration: {maxEntries: 10, maxAgeSeconds: 7 * 24 * 60 * 60}, cacheName: 'api-cache', cacheableResponse: { statuses: [0, 200] } }
    },
  ]
}
}

}
