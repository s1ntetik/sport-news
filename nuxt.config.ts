// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        head: {
            title: 'SPORTNEWS',
            meta: [
                { name: 'description', content: 'All news' }
            ]
        }
    },
    runtimeConfig: {
        apiKey: process.env.API_KEY
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
    ],
    tailwindcss: {
        configPath: 'tailwind.config',
    },
})

