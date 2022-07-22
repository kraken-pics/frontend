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
                    <h1 class="font-semibold text-2xl mt-4">Signup to Vyx</h1>
                    <div>
                        <p class="text-sm mt-4 max-w-lg">
                            Welcome, if you want to register you are in the right place, Vyx
                            is a file-sharing service that has support for ShareX, ShareNix and many others
                        </p>
                    </div>
                    <div class="mt-2">
                        <div class="mt-3 flex gap-3">
                            <label class="w-full">
                                <span class="text-sm w-full">Username</span>
                                <AuthInput placeholder="Username" type="name" />
                            </label>
                            <label class="w-full">
                                <span class="text-sm w-full">Email</span>
                                <AuthInput placeholder="Email" type="name" />
                            </label>
                        </div>
                    </div>
                    <div class="mt-3 grid gap-3">
                        <label>
                            <span class="text-sm">Password</span>
                            <AuthInput placeholder="Password" type="password" />
                        </label>
                    </div>
                    <div class="flex mt-4 items-center">
                        <NuxtLink to="/login" class="hover:text-gray-300 cursor-pointer">
                            Already have an account?
                        </NuxtLink>
                        <button class="bg-indigo-600 ml-auto text-sm font-semibold px-4 h-8 hover:bg-indigo-700 rounded
                        transform active:scale-90 duration-300">
                            Register
                        </button>
                    </div>
                </div>
                <!-- {/* <div class="grid gap-2 max-w-md bg-black bg-opacity-20 p-4 rounded-lg">
                <div>
                    <h1 class="text-3xl font-semibold">Register to Vyx</h1>
                    <p class="mt-2 max-w-xl">
                        Welcome, if you want to register you are in the right place, Vyx
                        is a file-sharing service that has support for ShareX
                    </p>
                </div>
                <div class="mt-4 w-full flex gap-2">
                    <Input PlaceHolder="Username" Type="name" />
                    <Input PlaceHolder="Email" Type="name" />
                </div>
                <Input PlaceHolder="Password" Type="name" />
                <Input PlaceHolder="Confirm Password" Type="name" />
                <button class="bg-indigo-600 text-sm font-semibold mt-4 px-4 h-8 hover:bg-indigo-700 rounded transform
                    active:scale-90 duration-300">
                    Sign Up
                </button>
            </div> */} -->
            </div>
        </div>
    </div>
</template>