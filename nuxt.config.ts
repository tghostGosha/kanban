// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', ],
  // "@hebilicious/vue-query-nuxt",'vue-kanban', 'axios' '@nuxtjs/supabase'
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**']
  },

  // supabase: {
  //   // Options
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY
  // }

})
