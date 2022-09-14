import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['keen-slider/keen-slider.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  buildModules: ['vite-plugin-vue-type-imports/nuxt'],
  publicRuntimeConfig: {},
  experimental: {
    reactivityTransform: true,
  },
})
