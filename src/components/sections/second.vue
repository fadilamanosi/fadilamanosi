<template>
    <div class="px-8 bg-[#FFFFFF]  ">
        <div class="flex flex-col gap-10 h-full  lg:py-16 py-4">
            <div class="text-[#48080D]  text-start">
                <h1 class=" lg:text-[4.067em] text-[50px] font-bold ">My Skills</h1>
                <span>
                    There are many variations of passages of lorem ipsum available,<br> but the majority have suffered
                    alteration in
                    some form
                </span>
            </div>

            <div class="grid lg:grid-cols-4 gap-8 h-full lg:place-content-center ">
                <div class="relative bg-[#F5E9E6]  overflow-hidden ">
                    <div
                        class="   flex flex-col justify-between cursor-pointer overflow-hidden gap-[2em]  z-50 top-0 h-full p-4">
                        <div class="bg-[rgb(200,98,87)] w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.one ? 'roll' : '')"> 01</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-[#48080D] font-medium">PHP</h1>
                            <div @mouseenter="hoverIn('one')" @mouseout="hoverOut('one')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>
                    </div>
                </div>

                <div class="relative bg-[#48080D]  overflow-hidden ">
                    <div
                        class="  flex flex-col justify-between cursor-pointer overflow-hidden gap-[5em]  z-50 top-0 h-full p-4">
                        <div class="bg-[#F5E9E6] w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.two ? 'roll' : '')"> 02</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-white font-medium">Laravel</h1>



                            <div @mouseenter="hoverIn('two')" @mouseout="hoverOut('two')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>


                    </div>
                </div>


                <div class="relative bg-[#C86257]  overflow-hidden ">
                    <div
                        class="  flex flex-col justify-between cursor-pointer overflow-hidden gap-[5em]  z-50 top-0 h-full p-4">
                        <div class="bg-white w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.three ? 'roll' : '')"> 03</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-white font-medium">Vue Js</h1>
                            <div @mouseenter="hoverIn('three')" @mouseout="hoverOut('three')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>
                    </div>
                </div>


                <div class="relative bg-[#48080D]  overflow-hidden ">
                    <div
                        class="  flex flex-col justify-between cursor-pointer overflow-hidden gap-[5em]  z-50 top-0 h-full p-4">
                        <div class="bg-[#F5E9E6] w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.four ? 'roll' : '')"> 05</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-white font-medium">DevOps</h1>
                            <div @mouseenter="hoverIn('four')" @mouseout="hoverOut('four')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>

                        </div>
                    </div>
                </div>

                <div class="relative bg-[#C86257]  overflow-hidden ">
                    <div
                        class="  flex flex-col justify-between cursor-pointer overflow-hidden gap-[5em]  z-50 top-0 h-full p-4">
                        <div class="bg-white w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.five ? 'roll' : '')"> 06</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-white font-medium">Git</h1>
                            <div @mouseenter="hoverIn('five')" @mouseout="hoverOut('five')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>
                    </div>
                </div>


                <div class="relative bg-[#F5E9E6]  overflow-hidden ">
                    <div
                        class="   flex flex-col justify-between cursor-pointer overflow-hidden gap-[2em]  z-50 top-0 h-full p-4">
                        <div class="bg-[rgb(200,98,87)] w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.six ? 'roll' : '')"> 07</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-[#48080D] font-medium">AWS</h1>
                            <div @mouseenter="hoverIn('six')" @mouseout="hoverOut('six')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>
                    </div>
                </div>



                <div class="relative bg-[#48080D] overflow-hidden ">
                    <div
                        class="  flex flex-col justify-between cursor-pointer overflow-hidden gap-[5em]  z-50 top-0 h-full p-4">
                        <div class="bg-[#F5E9E6] w-fit p-4">
                            <h1 :class="'rotate font-bold ' + (transition.seven ? 'roll' : '')"> 08</h1>
                        </div>

                        <div class="grid gap-8">
                            <h1 class="text-[1.6em] text-white font-medium">Docker</h1>
                            <div @mouseenter="hoverIn('seven')" @mouseout="hoverOut('seven')"
                                class="absolute top-0 bg-transparent w-full h-full right-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import backend from '@/components/icons/backend.vue';
import frontend from '@/components/icons/frontend.vue';

import $ from 'jquery';
import { ref } from 'vue';

const transition = ref({})

function hoverIn(e) {
    transition.value[e] = true
}


function hoverOut(e) {
    transition.value[e] = false
}
</script>

<style scoped>

.rotate.roll {
    rotate: 160deg;
    transition: rotate 1s;
}

.rotate {
    transition: rotate 1s;
}
</style>