// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    // [
    //   '@vee-validate/nuxt',
    //   {
    //     // disable or enable auto imports
    //     autoImports: true,
    //     // Use different names for components
    //     componentNames: {
    //       Form: 'VeeForm',
    //       Field: 'VeeField',
    //       FieldArray: 'VeeFieldArray',
    //       ErrorMessage: 'VeeErrorMessage',
    //     },
    //   },
    // ],

  ],

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
