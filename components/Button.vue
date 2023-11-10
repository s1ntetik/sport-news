<template>
    <button :class="classNames" class="btn">
        <p class="whitespace-nowrap text-sm text-cyan">
            <slot></slot>
        </p>
    </button>
</template>

<script setup>

const props = defineProps({
    bordered: Boolean
})

const classNames = computed(() => {
    return {
        ['--bordered']: props.bordered
    }
})

</script>