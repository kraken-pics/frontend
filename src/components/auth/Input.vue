<script setup>

defineProps({
    placeholder: {
        type: String,
        required: true
    },
    type: {
        String,
        required: true
    }
})

</script>

<template>
    <div class="flex items-center w-full">
        <!-- icon -->
        <span class="absolute pl-2">
            <slot />
        </span>

        <!-- input -->
        <input :type="type"
            :class="'w-full border-2 mt-2 disabled:cursor-not-allowed border-zinc-800 rounded-md bg-zinc-900 placeholder:text-zinc-400 text-white px-4 py-2 text-sm text-left duration-300 hover:bg-zinc-800/90 transition ease-in-out outline-none focus:bg-zinc-800/90'"
            :placeholder="placeholder" />

    </div>
</template>