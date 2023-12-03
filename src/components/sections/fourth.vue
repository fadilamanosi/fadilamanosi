<template>
    <div class="bg-[#FFFFFF] grid lg:grid-cols-2 lg:pt-16 pt-8 lg:pb-16 gap-16 lg:px-8">
        <div class="px-8  ">
            <h1 class="lg:text-[4.067em] text-[40px] text-[#49070D] font-semibold mb-8">Contact Me</h1>

            <div class="grid lg:gap-16 gap-8 break-all">
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
                        <a class=" font-semibold text-lg " href="mailto:+fadilamanosi@gmail.com">fadilamanosi@gmail.com</a>
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
            <div class="grid gap-16 bg-[#F5E8E5] lg:py-8 py-16 px-8">
                <form @submit.prevent="send()" class="grid gap-8" id="send-mail">
                    <div class="grid">
                        <label>Name*</label>
                        <input v-model="form.name" required class="border-2 border-gray-600 w-full p-3">
                    </div>

                    <div class="grid">
                        <label>Email*</label>
                        <input v-model="form.email" required class="border-2 border-gray-600 w-full p-3">
                    </div>


                    <div class="grid">
                        <label>Subject*</label>
                        <input v-model="form.subject"  required class="border-2 border-gray-600 w-full p-3">
                    </div>

                    <div class="grid">
                        <label>Message*</label>
                        <textarea v-model="form.message"  required class="border-2 border-gray-600 w-full p-3" rows="10"></textarea>
                    </div>
                </form>

                <button form="send-mail"  class="border-2 border-gray-600 w-full p-2">Send</button>
            </div>

    </div>
</template>

<script setup>
import Devops from '@/components/icons/devops.vue';

import XIcon from '@/components/icons/x-icon.vue';
import linkedin from '@/components/icons/linkedin.vue';
import github from '@/components/icons/github.vue';

import axios from "axios";
import { ref } from 'vue';

const form = ref({});


function send() {
    axios.post('http://localhost:8888/.netlify/functions/api', form.value)
        .then((e) => {
            console.log(e)
        })
        .catch((e) => {
            console.log(e)
        })
}

</script>