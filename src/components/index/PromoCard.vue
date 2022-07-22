<template>

    <div class="flex sm:flex-row flex-col justify-center gap-2 mt-6 max-w-5xl mx-auto">
        <div
            class="border w-full hover:bg-zinc-800 transition-all duration-300 ease-out max-w-lg p-4 rounded-lg border-zinc-800">
            <div class="text-xl flex justify-center items-center font-semibold">
                <div class="bg-zinc-800 bg-opacity-60 shadow rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"
                        class="h-5 w-5  text-indigo-400">
                        <path
                            d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </div>
                <p class="ml-2">
                    Open<span class="text-indigo-600"> Source</span>
                </p>
            </div>
            <p class="flex justify-center mt-2 text-gray-300">
                Want to host an instance of Vyx.pics yourself?
                <span class="ml-1 text-blue-400">
                    <NuxtLink href="https://github.com/kraken-pics/backend">You can!</NuxtLink>
                </span>
            </p>
            <p class="text-center mt-2"></p>
        </div>

        <div
            class="border w-full max-w-lg p-4 hover:bg-zinc-800 transition-all duration-300 ease-out rounded-lg border-zinc-800">
            <div class="text-xl flex justify-center font-semibold">
                <div class="bg-zinc-800 flex items-center bg-opacity-60 shadow-xl rounded-3xl p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="h-5 w-5 text-rose-300 items-center" viewBox="0 0 16 16">
                        <path
                            d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    </svg>
                </div>
                <p class="ml-2">
                    Long<span class="text-indigo-600"> Uptime</span>
                </p>
            </div>
            <p class="mt-2 text-gray-300 text-center">
                Designed with up to date hardware, modern practices and heavily
                maintained.
            </p>
        </div>
    </div>
    <div class="flex justify-center mt-2 pb-4">
        <div
            class="border max-w-5xl w-full hover:bg-zinc-800 transition-all duration-300 ease-out p-4 rounded-lg border-zinc-800">
            <div class="text-xl flex font-semibold">
                <div class="bg-zinc-800 flex items-center bg-opacity-60 shadow-xl rounded-3xl p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </div>
                <p class="ml-2">
                    Feature<span class="text-indigo-600"> Rich</span>
                </p>
            </div>
            <p class="mt-2 text-gray-300">
                Vyx has lot's of features to make your experience unforgettable,
                from embed customization to embed profiles, url settings and much
                more, come find out!
            </p>
        </div>
    </div>

</template>