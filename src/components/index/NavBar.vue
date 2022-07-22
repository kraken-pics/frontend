<script setup>
const { siteName, siteTLD } = useRuntimeConfig().public
</script>

<template>
    <div class="">
        <nav class="md:px-28 flex p-3 bg-[#121212]">
            <h1 class="font-semibold text-xl mt-2">{{ siteName }}</h1>
            <div class="flex flex-row-reverse  gap-4 ml-auto">
                <NuxtLink to="/register">

                    <IndexNavButton
                        className="bg-indigo-600 px-4 h-8 hover:bg-indigo-700 rounded transform active:scale-90 duration-300">
                        Register
                    </IndexNavButton>
                </NuxtLink>

                <IndexNavButton>
                    <NuxtLink to="/login">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-5 w-5"
                                viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fillRule="evenodd"
                                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            <p class="ml-2">Login</p>
                        </div>
                    </NuxtLink>
                </IndexNavButton>
            </div>
        </nav>
    </div>
</template>