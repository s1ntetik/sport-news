import notFound from 'assets/img/image-not-found.png'
import { DateTime } from 'luxon';

export function useNews(newsType, params) {
    // news data
    const newsRawData = ref([])
    const newsError = ref(null)

    const newsData = computed(() => {
        return newsRawData.value.map((item) => {
            return {
                ...item,
                publishedAt: item.publishedAt ? DateTime.fromISO(item.publishedAt).toRelative() : null,
                urlToImage: item.urlToImage ? item.urlToImage : notFound
            }
        }).filter((item) => item.title !== '[Removed]')
    })

    // news data pagination
    const pageSize = ref(15)
    const totalResults = ref(0)

    const needPagination = computed(() => {
        return newsRawData.value.length < totalResults.value
    })

    async function loadMore() {
        pageSize.value = pageSize.value + 10
        await fetchNews()
    }

    // fetch news data
    async function fetchNews() {
        const { data, error } = await useFetch(`/api/news/${newsType}`, {
            query: {
                ...params,
                pageSize: pageSize.value,
            },
        })

        if (error.value) {
            newsError.value = error.value.data
        } else {

            totalResults.value = data.value.totalResults
            newsRawData.value = data.value.articles

            newsError.value = null
        }
    }

    async function refreshNews() {
        pageSize.value = 15
        await fetchNews()
    }

    return { newsData, needPagination, fetchNews, newsError, refreshNews, loadMore }
}