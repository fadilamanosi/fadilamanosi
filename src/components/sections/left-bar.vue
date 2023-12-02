<template>
    <div class=" bg-[#bb7c65]  w-[20%]  px-4 hidden lg:grid  relative grid-rows-12 gap-4 pt-8   ">

        <div class=" row-span-1 ">
            <hambuger @click="sidebar = true"  :class="'rotate '  + (sidebar ? 'roll' : '')"></hambuger>
        </div>
        <div class="relative row-span-1 ">
            <div class="flex items-center gap-8 ">
                <b class="w-fit" v-text="'0' + (counter.current + 1)"></b>
                <div class="w-[50%] flex gap-3 justify-center">
                    <div v-for="(v, i) in counter.total" :key="i"
                        :class="'w-3 h-2  ' + ((counter.current + 1) == v ? 'bg-[#49070D]' : 'bg-white')">
                    </div>
                </div>
                <b class="w-fit text-white" v-text="'0' + counter.total"></b>
            </div>
        </div>
        <div class=" font-medium text-[100%] row-span-10 h-full ">
            <div class="grid gap-8 ">
                <div class="grid">
                    <label class="text-[#49070D] tracking-[0.4rem]">NAME</label>
                    <h5 class="text-white">Fadil amanosi</h5>
                </div>

                <div class="grid">
                    <label class="text-[#49070D] tracking-[0.4rem]">ROLE</label>
                    <h5 class="text-white">Full Stack Developer (Backend Expert)</h5>
                </div>

                <div class="grid">
                    <label class="text-[#49070D] tracking-[0.4rem]">EMAIL</label>
                    <a href="mailto:fadilamanosi@gmail.com" class="text-white">fadilamanosi@gmail.com</a>
                </div>

                <div class="grid">
                    <label class="text-[#49070D] tracking-[0.4rem]">PHONE</label>
                    <a href="tel:+2349065239011" class="text-white">+2349065239011</a>
                </div>
            </div>
        </div>


        <img src="/images/logo.svg" class="row-span-6 items-start ">


        <Transition name="slide-fade">
            <side-bar :open="sidebar" @close="sidebar = false">
                <template v-slot:first-counter>
                    <div class="flex items-center gap-8 ">
                        <b class="w-fit" v-text="'0' + (counter.current + 1)"></b>
                        <div class="w-[50%] flex gap-3 justify-center">
                            <div v-for="(v, i) in counter.total" :key="i"
                                :class="'w-3 h-2  ' + ((counter.current + 1) == v ? 'bg-[#49070D]' : 'bg-white')">
                            </div>
                        </div>
                        <b class="w-fit text-white" v-text="'0' + counter.total"></b>
                    </div>
                </template>

                <template v-slot:second-counter>
                    <li :class="(counter.current + 1) == 1 ? 'border-b-8 border-gray-700' : ''">Home</li>
                    <li :class="(counter.current + 1) == 2 ? 'border-b-8 border-gray-700' : ''">Skills</li>
                    <li :class="(counter.current + 1) == 3 ? 'border-b-8 border-gray-700' : ''">Experience</li>
                    <li :class="(counter.current + 1) == 4 ? 'border-b-8 border-gray-700' : ''">Contact Me</li>
                </template>

            </side-bar>
        </Transition>

    </div>
</template>

<script setup>
import hambuger from '@/components/icons/hambuger.vue';
import sideBar from '@/components/sections/side-bar.vue';
import { ref } from 'vue';

defineProps(['counter'])


const sidebar = ref(false)
</script>