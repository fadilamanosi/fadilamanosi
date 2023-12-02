<template>
    <div class="bg-[#FFFFFF] grid lg:grid-cols-2 lg:py-16 gap-8 lg:px-8">
        <div class="px-8 lg:pt-0 pt-8">
            <h1 class="lg:text-[4.067em] text-[50px] text-[#49070D] font-semibold mb-8">Contact Me</h1>

            <div class="grid lg:gap-16 gap-8">
                <div class="flex items-start gap-6">
                    <Devops :width="30" :height="30" :fill="'black'"></Devops>
                    <div class="text-[#49070D] grid gap-3">
                        <p class="font-light text-lg">Just wanna say hello! Give me a call</p>
                        <a class=" font-semibold text-lg" href="tel:+2349065239011">+2349065239011</a>
                    </div>
                </div>


                <div class="flex items-start gap-6">
                    <Devops :width="30" :height="30" :fill="'black'"></Devops>
                    <div class="text-[#49070D] grid gap-3">
                        <p class="font-light text-lg">Get to me using mail</p>
                        <a class=" font-semibold text-lg" href="mailto:+fadilamanosi@gmail.com">fadilamanosi@gmail.com</a>
                    </div>
                </div>

                <div class="flex items-start gap-6">
                    <Devops :width="30" :height="30" :fill="'black'"></Devops>
                    <div class="text-[#49070D] grid gap-3">
                        <p class="font-light text-lg">Reach me using this social handles</p>
                        <div class="flex gap-8">
                            <x-icon></x-icon>
                            <linkedin></linkedin>
                            <github></github>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid gap-16 bg-[#F5E8E5] p-8">
            <form class="grid gap-8">
                <div class="grid">
                    <label>Name*</label>
                    <input class="border-2 border-gray-600 w-full p-3">
                </div>

                <div class="grid">
                    <label>Email*</label>
                    <input class="border-2 border-gray-600 w-full p-3">
                </div>


                <div class="grid">
                    <label>Subject*</label>
                    <input class="border-2 border-gray-600 w-full p-3">
                </div>

                <div class="grid">
                    <label>Message*</label>
                    <textarea class="border-2 border-gray-600 w-full p-3" rows="10"></textarea>
                </div>
            </form>

            <button @click="send()" class="border-2 border-gray-600 w-full p-2">Send</button>
        </div>

    </div>
</template>

<script setup>
import Devops from '@/components/icons/devops.vue';

import XIcon from '@/components/icons/x-icon.vue';
import linkedin from '@/components/icons/linkedin.vue';
import github from '@/components/icons/github.vue';



function send() {
    Email.send({
        Host: "mail.busfare.ng",
        Username: "noreply@busfare.ng",
        Password: "2@Default4",
        To: 'fadilamanosi@gmail.com',
        From: "noreply@busfare.ng",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then((m) => {
        console.log(m)
    }).catch((error) => {
        console.log(error)
    });
}

</script>