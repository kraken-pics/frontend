<script setup lang="ts">
const { siteName, siteTLD, ghProfile, discServer } = useRuntimeConfig().public;
</script>

<template>

    <div class="bg-zinc-800 bg-opacity-70 p-4 mt-12 relative">
        <div class="container gap-4 items-center flex m-auto font-semibold">
            <div>
                <p class="text-xl">
                    Ready to <NuxtLink to="/register" class="text-indigo-600">Join?</NuxtLink>
                </p>
                <p class="text-lg">
                    Sign up <NuxtLink to="/register" class="text-indigo-600">Now!</NuxtLink>
                </p>
            </div>
            <NuxtLink to="/register">
                <button
                    class="bg-indigo-600 text-sm font-semibold px-4 h-8 hover:bg-indigo-700 rounded transform active:scale-90 duration-300">
                    Sign Up
                </button>
            </NuxtLink>
        </div>
    </div>

    <footer class="bg-black bg-opacity-20 p-4 mt-auto">
        <h1
            class="text-center text-2xl font-semibold border-b pb-2 hover:border-zinc-400 transition-colors ease-in cursor-default border-zinc-800 mx-auto max-w-lg">
            {{ siteName }}<span class="text-indigo-600">{{ siteTLD }}</span>
        </h1>

        <div class="container mx-auto pb-4 flex gap-24 mt-6">
            <div>
                <ul class="text-lg font-semibold">Main</ul>
                <div>
                    <ul class="text-gray-300 cursor-pointer hover:text-gray-400 text-sm mt-2">
                        <NuxtLink :to="discServer">Discord Server</NuxtLink>
                    </ul>
                    <ul class="text-gray-300 cursor-pointer hover:text-gray-400 text-sm mt-2">
                        <NuxtLink :to="ghProfile">Github</NuxtLink>
                    </ul>
                </div>
            </div>
            <div>
                <!-- if you're selfhosting, please don't change this, let us original devs get some recognition! -->
                <ul class="text-lg font-semibold">Credits</ul>
                <div>
                    <NuxtLink to="https://nahsahh.com">
                        <ul class="text-gray-300 cursor-pointer hover:text-gray-400 text-sm mt-2">
                            NahSahh - Frontend
                        </ul>
                    </NuxtLink>
                    <NuxtLink to="https://github.com/ian-ok">
                        <ul class="text-gray-300 cursor-pointer hover:text-gray-400 text-sm mt-2">
                            Ian - Backend
                        </ul>
                    </NuxtLink>

                </div>
            </div>
        </div>
    </footer>
</template>