// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/api/**': { cors: true, headers: { 'access-control-allowed-methods': 'GET' } },
    },
    compressPublicAssets: {
      brotli: true,
      gzip: false,
    },
  },

  runtimeConfig: {
    IMAGEKIT_B64_API: '',
    public: {
      FORMSPARK_ACTION_URL: '',
      BOTPOISON_PK: '',
    },
  },

  modules: [
    'nuxt-schema-org',
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
  ],

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },

  site: {
    url: 'https://www.benjaminoddou-photographe.com',
    name: 'Benjamin Oddou Photographe',
  },

  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/palladium',
    },
    screens: {
      'sm': 575,
      'md': 767,
      'lg': 991,
      'xl': 1199,
      '2xl': 1679,
    },
  },

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  pwa: {
    manifest: {
      name: 'Benjamin Oddou Photographe',
      short_name: 'Benjamin Oddou',
      description:
        'Galerie en ligne de Benjamin Oddou, photographe en quête de nouveaux challenges. Réservez une séance !',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      lang: 'fr',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },

  compatibilityDate: '2024-10-19',
})