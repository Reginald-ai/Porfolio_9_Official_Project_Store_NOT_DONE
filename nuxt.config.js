import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - nuxt-firebase-form",
    title: "nuxt-firebase-form",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "material-design-icons-iconfont/dist/material-design-icons.css",
    "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/aos", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["nuxt-material-design-icons"],
    ["@nuxtjs/axios"],
    ["nuxt-material-design-icons"],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyB_OkDbgMOP7R3HcAzG6nNkNGsiAsj6qa8",
          authDomain: "nuxt-firebase-form.firebaseapp.com",
          projectId: "nuxt-firebase-form",
          storageBucket: "nuxt-firebase-form.appspot.com",
          messagingSenderId: "313426551869",
          appId: "1:313426551869:web:b4fcb442880c26a5837654"
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false
            },
            ssr: false // default
          },
          firestore: true
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: "file-loader",
            query: {
              name: "assets/[name].[hash:8].[ext]"
            }
          },
          {
            loader: "vue-svg-loader",
            options: {
              // Optional svgo options
              svgo: {
                plugins: [{ removeViewBox: false }]
              }
            }
          }
        ]
      });
    },
    postcss: {
      preset: {
        stage: 3
      }
    }
  }
};
