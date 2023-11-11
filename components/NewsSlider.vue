<template>
    <div class="bg-blue-light py-12">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center pb-12">
                <h2 class="text-2xl text-white whitespace-nowrap">Featured News</h2>

                <div class="flex gap-4">
                    <Button>View all</Button>

                    <div class="cursor-pointer" @click="prevSlide">
                        <img src="../assets/svg/arrow-left.svg" alt="arrow"/>
                    </div>

                    <div class="cursor-pointer" @click="nextSlide">
                        <img src="../assets/svg/arrow-right.svg" alt="arrow"/>
                    </div>
                </div>
            </div>

            <Swiper
              :style="{overflow: 'visible'}"
              v-bind="{...swiperConfig}"
              @init="swiperOnInit"
            >
                <SwiperSlide v-for="article in newsData" :key="article.publishedAt">
                    <NuxtLink :to="article.url" target="_blank" class="flex flex-col h-full">
                        <News :image="article.urlToImage" image-classes="md:h-[314px] h-[214px]"/>

                        <div class="flex-grow flex flex-col justify-between gap-1 text-center mt-4">
                            <p class="text-base text-white line-clamp-2 text-ellipsis overflow-hidden">
                                {{ article.title }}</p>
                            <p class="text-sm opacity-[0.5] text-white">{{ article.publishedAt }}</p>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>
        </div>

    </div>

</template>

<script setup>
import { useNews } from '~/composables/useNews.js';

const swiper = ref(null)

function swiperOnInit(value) {
    swiper.value = value
}

function nextSlide() {
    swiper.value.slideNext()
}

function prevSlide() {
    swiper.value.slidePrev()
}

const swiperConfig = {
    modules: [SwiperAutoplay, SwiperPagination],
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: '1',
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
}

const {
    newsData,
    fetchNews,
} = useNews('top-headlines', {
    country: 'us',
})

fetchNews()


</script>