<template>
    <div class="container mx-auto py-8 px-6 md:py-14 md:px-8">

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
                <NuxtLink :to="newsData[0]" target="_blank" class="sm:col-span-2">
                    <News
                      :image="newsData[0].urlToImage"
                      image-classes="md:h-[410px]"
                      :textOverImage="newsData[0].title"
                    >
                    </News>
                </NuxtLink>


                <NuxtLink :to="article.url" target="_blank" v-for="article in newsData.slice(1)"
                          :key="article.publishedAt">
                    <News
                      :image="article.urlToImage"
                      image-classes="sm:h-[266px]"
                      :title="article.title"
                      :publishedAt="article.publishedAt"
                      :description="article.description"
                    >
                    </News>
                </NuxtLink>
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


</script>
