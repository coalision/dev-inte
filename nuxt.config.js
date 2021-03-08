export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dev-inte",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/fontawesome"],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
