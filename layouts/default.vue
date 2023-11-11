<template>
    <header class="bg-blue-dark">
        <nav class="container mx-auto p-6 md:p-8 flex justify-between">
            <NuxtLink to="/" class="text-xl italic text-white">SPORTNEWS</NuxtLink>
        </nav>
    </header>

    <div class="overflow-hidden">
        <slot></slot>
    </div>

</template>