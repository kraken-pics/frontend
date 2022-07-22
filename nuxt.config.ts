import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: "./src",
    modules: ['@nuxtjs/tailwindcss'],
    env: {
        SITE_NAME: process.env.SITE_NAME,
        SITE_TLD: process.env.SITE_TLD,
        GITHUB_PROFILE: process.env.GITHUB_PROFILE,
        DISCORD_SERVER: process.env.DISCORD_SERVER,
        API_URL: process.env.API_URL
    },
    runtimeConfig: {
        public: {
            siteName: process.env.SITE_NAME,
            siteTLD: process.env.SITE_TLD,
            ghProfile: process.env.GITHUB_PROFILE,
            discServer: process.env.DISCORD_SERVER,
            apiURL: process.env.API_URL
        }
    }
})
