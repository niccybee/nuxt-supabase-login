// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/supabase'],
  supabase: {
    url: 'https://qspbcpskctpahamtbrgk.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTIwODIzMSwiZXhwIjoxOTQwNzg0MjMxfQ.wCCsA-w7mtgsbhhTZ_y-glaaxpztIRzLIABd6cJLm7g',
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['', '/confirm', '/app/*', '/admin', '/admin/*'],
      exclude: ['/', '/signup'],
      cookieRedirect: false,
    },
  },
});
