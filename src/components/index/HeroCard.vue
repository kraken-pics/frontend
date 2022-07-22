<script setup>
const { siteName, siteTLD } = useRuntimeConfig().public
</script>

<script>

function scrollToFooter() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "auto"
    })
}

</script>


<template>
    <div
        class="bg-black inline-block align-middle md:ml-32 mx-auto mt-4 md:mt-10 relative z-10 bg-opacity-20 rounded-lg w-full max-w-xl shadow-lg">
        <svg class="absolute rounded-t-lg max-w-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#18181B" fillOpacity="1" d="M0,320L1440,32L1440,0L0,0Z"></path>
        </svg>
        <div class="p-4">
            <h1 class="text-3xl font-semibold relative">
                {{ siteName }}<span class="text-indigo-600 relative">{{ siteTLD }}</span>
            </h1>
            <div class="mt-1 relative">
                Host your files on
                <span class="text-indigo-400">{{ siteName }}'s</span> quick and
                efficient network today, while maintaining a sleek new look.
            </div>
            <div class="flex md:flex-row flex-col-reverse gap-2">

                <ul
                    class="md:mt-12 mt-2 flex md:flex-col md:justify-start justify-center gap-3 font-semibold text-gray-100 text-sm">
                    <li class="flex items-center ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="mr-2 bg-zinc-700 text-yellow-300 p-1 rounded-full h-6 w-6" viewBox="0 0 16 16">
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg>
                        <div class="flex gap-1">
                            <div>Fast</div>
                            <div>uploads</div>
                        </div>
                    </li>
                    <li class="flex items-center ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="mr-2 bg-zinc-700 text-blue-400 p-[5px] rounded-full h-6 w-6" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                        </svg>
                        <div class="flex gap-1">
                            <div>Secure</div>
                            <div>accounts</div>
                        </div>
                    </li>

                </ul>
                <div>
                    <div class="mt-4 bg-zinc-800 shadow-zinc-800 shadow md:max-w-sm p-4 rounded-lg md:ml-4 h-32">
                        <p class="mb-2">Share your best moments</p>
                        <p class="text-sm">
                            Securely share files using publicly accessible links, while
                            keeping you and your data safe.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center md:justify-end text-center md:mt-1 pt-3">
                <NuxtLink to="/register">
                    <button
                        class="font-medium text-sm bg-indigo-600 px-4 h-8 hover:bg-indigo-700 rounded transform active:scale-90 duration-300">
                        Get Started!
                    </button>
                </NuxtLink>

            </div>
        </div>
    </div>
</template>