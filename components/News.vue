<template>
    <div>
        <div class="relative">
            <img :class="imageClasses" class="w-full object-cover object-top md:object-center rounded"
                 :src="image"
                 alt="news-photo">
            <p class="text-base text-white absolute bottom-4 left-4 right-4">{{ textOverImage }}</p>
        </div>

        <div v-if="title || publishedAt || description" class="flex flex-col justify-between flex-grow gap-2 mt-3">
            <p v-if="title" class="text-base font-medium">{{ title }}</p>
            <p v-if="publishedAt" class="text-sm font-normal">{{ publishedAt }}</p>
            <p v-if="description" class="text-sm font-normal">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    image: String,
    imageClasses: String,
    textOverImage: String,
    title: String,
    publishedAt: String,
    description: String,
})
</script>

<style lang="scss" scoped>

</style>