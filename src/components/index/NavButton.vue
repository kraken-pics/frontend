<script setup>

defineProps({
    className: {
        type: String,
        default: ""
    }
})

</script>

<template>

    <button :class="'font-medium text-sm ' + className">
        <slot />
    </button>

</template>