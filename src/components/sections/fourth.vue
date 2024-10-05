<template>
    <div class="bg-[#FFFFFF] grid lg:grid-cols-2 pt-16 lg:pb-16 gap-16 lg:px-8">
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
                    <input v-model="form.subject" required class="border-2 border-gray-600 w-full p-3">
                </div>

                <div class="grid">
                    <label>Message*</label>
                    <textarea v-model="form.message" required class="border-2 border-gray-600 w-full p-3"
                        rows="10"></textarea>
                </div>
            </form>

            <div class="relative w-full text-center">
                <div v-if="disabled" class="absolute grid place-content-center w-full bottom-0 h-full bg-[#000000]">
                    <spinner></spinner>
                </div>
                <button :disabled="disabled" form="send-mail"
                    class=" hover:text-white hover:bg-[#BB7C65] border-2 border-gray-600 w-full p-2">
                    Send
                </button>
                <div :class="'mt-3 text-lg font-medium ' + (response.error ? 'text-red-600' : 'text-green-600')">
                    {{ response.message }}
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
import Devops from '@/components/icons/devops.vue';
import spinner from '@/components/icons/spinner.vue';

import XIcon from '@/components/icons/x-icon.vue';
import linkedin from '@/components/icons/linkedin.vue';
import github from '@/components/icons/github.vue';

import axios from "axios";
import { ref } from 'vue';

const form = ref({});
const disabled = ref(false)

const response = ref({
    error: false,
    message: "",
})

function send() {
    disabled.value = true
    axios.post('/.netlify/functions/api', form.value)
        .then((e) => {
            form.value = {}
            disabled.value = false;
            response.value.message = "Mail sent successfully";
        })
        .catch((e) => {
            console.log(e)
            disabled.value = false
            response.value.error = true;
            response.value.message = "An error occured while sending mail, try again.";
        })
}

</script>