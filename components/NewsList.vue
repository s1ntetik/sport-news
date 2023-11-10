<template>
    <div class="container mx-auto py-14 px-8">

        <template v-if="newsError">
            <div class="flex flex-col w-full items-center">
                <p class="text-base mb-5">
                    {{
                        newsError?.message || 'Sorry, something went wrong. Please try again'
                    }}
                </p>

                <Button @click="refreshNews">
                    Refresh
                </Button>
            </div>
        </template>

        <template v-else>
            <h2 class="text-2xl mb-4">News</h2>

            <div v-if="newsData.length"
                 class="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div class="sm:col-span-2 cursor-pointer">
                    <News
                      :image="newsData[0].urlToImage"
                      image-classes="md:h-[410px]"
                      :textOverImage="newsData[0].title"
                      @click="goToNewsPage(newsData[0].url)"
                    >
                    </News>
                </div>


                <div class="cursor-pointer" v-for="article in newsData.slice(1)" :key="article.publishedAt">
                    <News
                      :image="article.urlToImage"
                      image-classes="sm:h-[266px]"
                      :title="article.title"
                      :publishedAt="article.publishedAt"
                      :description="article.description"
                      @click="goToNewsPage(article.url)"
                    >
                    </News>
                </div>
            </div>

            <div v-if="needPagination" class="flex justify-center mt-[48px]">
                <Button bordered @click="loadMore">
                    Load more
                </Button>
            </div>
        </template>
    </div>

</template>

<script setup>
import { useNews } from '~/composables/useNews.js'

const {
    newsData,
    needPagination,
    fetchNews,
    newsError,
    refreshNews,
    loadMore
} = useNews('everything', {
    sortBy: 'popularity',
    domains: 'techcrunch.com',
})

fetchNews()

function goToNewsPage(url) {
    window.open(`${url}`, '_blank')
}

</script>
