<template>
    <div class="lg:h-screen  flex lg:flex-row flex-col-reverse md:px-16 px-4 lg:gap-16 gap-8  lg:py-24 py-8 bg-[#F5E8E5]">
        <div class="lg:w-[40%] w-full grid lg:gap-16 gap-4 px-">
            <h2 class="text-[28px] ">Hello. My name is</h2>


            <h1 class="lg:text-[100px] text-[50px] font-bold leading-[58px] text-[#49070D]">
                Fadil Amanosi
            </h1>

            <p class=" leading-loose">
                I’m a passionate Full-Stack Web Developer with over 6 years of experience specializing in creating dynamic
                and user-friendly web applications. I have a strong background in PHP, Laravel, and VueJs, and have worked
                on various projects from innovative startups to large-scale enterprise solutions.
            </p>
            <div class="flex w-full gap-16">
                <a href="https://twitter.com/Fadilamanosi">
                    <x-icon></x-icon>
                </a>
                <a href="https://linkedin.com/in/fadil-amanosi-791521195">
                    <linkedin></linkedin>
                </a>
                <a href="https://github.com/fadilamanosi">
                    <github></github>
                </a>
            </div>
        </div>


        <div class="lg:w-[60%] grid place-content-center">
            <div class="bg-[#BB7C65] rounded-lg w-fit h-fit ">
                <img src="/images/me.png">
            </div>
        </div>

    </div>
</template>

<script setup>
import XIcon from '@/components/icons/x-icon.vue';
import linkedin from '@/components/icons/linkedin.vue';
import github from '@/components/icons/github.vue';

</script>