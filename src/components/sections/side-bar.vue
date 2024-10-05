<template>
    <div v-if="open" class="bg-[#F37A82]  lg:absolute fixed left-0 h-full top-0 px-4 grid   gap-4 pt-8 w-full z-[1000]">
        <div class=" row-span-2  grid">
            <close @click="$emit('close')" class="cursor-pointer"></close>
            <div class="relative row-span-2 ">
                <slot name="first-counter"></slot>
            </div>
        </div>

        <div class=" font-medium text-[100%] row-span-2 h-full ">
            <ul class="grid gap-8 text-[28px] font-bold text-white">
              <slot name="second-counter"></slot>
            </ul>       
        </div>

    </div>
</template>

<script setup>
import close from '@/components/icons/close.vue';

defineProps(['open'])
defineEmits(['close'])
</script>