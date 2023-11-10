const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {

    const { newsType } = event.context.params
    const query = getQuery(event)

    return await $fetch(
        `https://newsapi.org/v2/${newsType}`, {
            params: {
                ...query,
                apiKey: `${config.apiKey}`
            }
        }
    )
})