<template>
    <div>
        <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1d1d1d" fill-opacity="1"
                d="M0,320L120,282.7C240,245,480,171,720,122.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
            </path>
        </svg>
        <div class="flex flex-col">
            <div class="container md:m-24 p-4 gap-12 blur-0 w-full max-w-3xl">
                <div class="w-full max-w-2xl flex flex-col">
                    <h1 class="font-semibold text-2xl mt-4">Sign into Vyx</h1>
                    <div>
                        <p class="text-sm mt-4 max-w-lg">
                            Vyx.pics dashboard is used to edit your uploaded files & ShareX
                            uploader settings.
                        </p>
                    </div>
                    <div class="mt-5">
                        <label class=" w-full">
                            <span class="text-sm">Username</span>
                            <AuthInput placeholder="Username" type="name" />
                        </label>
                    </div>
                    <div class="mt-3 grid gap-3">
                        <label>
                            <span class="text-sm">Password</span>
                            <AuthInput placeholder="Password" type="password" @change="" />
                        </label>
                    </div>
                    <div class="flex mt-4 items-center">
                        <NuxtLink to="/register" class="hover:text-gray-300 cursor-pointer">
                            Don't have an account?
                        </NuxtLink>
                        <button class="bg-indigo-600 ml-auto text-sm font-semibold px-4 h-8 hover:bg-indigo-700 rounded
                        transform active:scale-90 duration-300">
                            Login
                        </button>
                    </div>
                    <div class="mt-3">
                        <AuthError />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>