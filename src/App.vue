

<template>
  <div class="h-screen flex lg:flex-wrap flex-col relative">
    <LeftBar :counter="counter"></LeftBar>
    <div class="bg-[#F8F0FF]   lg:w-[80%] w-full   overflow-y-auto body">
      <first class="block"></first>
      <Second class="block"></Second>
      <Third class="block"></Third>
      <Fourth class="block"></Fourth>
    </div>

  </div>
</template>

<script setup>


import { onBeforeMount, onMounted, ref } from 'vue';
import $ from 'jquery';

import LeftBar from '@/components/sections/left-bar.vue';
import first from '@/components/sections/first.vue';
import Second from '@/components/sections/second.vue';
import Third from '@/components/sections/third.vue';
import Fourth from '@/components/sections/fourth.vue';



const counter = ref({
  total: 0,
  current: 0,
})

onMounted(() => {

  // Get total boxes
  counter.value.total = $('.block').length;


  document.querySelector('.body').addEventListener('scroll', function () {
    const b = $('.block');

    for (let i = 0; i < b.length; i++) {
      var elementTop = $($(b)[i]).offset().top;

      var elementBottom = elementTop + $($(b)[i]).outerHeight();

      var viewportTop = $('.body').scrollTop() + 50;
      // var viewportHalf = viewportTop + $('.body').height() / 2;


      // console.log(elementTop, viewportTop, elementBottom)
      if (elementBottom < viewportTop) {
        if (counter.value.current != i) {
          counter.value.current = i
        }
      }




      // console.log(elementTop, elementBottom, viewportTop, viewportHalf)


      // console.log(elementBottom, viewportTop)
      // if (elementBottom > viewportTop && elementTop < viewportHalf) {
      //   if (counter.value != i) {
      //     counter.value = i
      //     console.log(i)
      //   }
      // }

    }

    // var hT = $('.block').offset().top;

    // const b = $('.block');

    // for (let i = 0; i < b.length; i++) {

    //   // console.log($($(b)[i]).offset().top,$($(b)[i]).height(),$($(b)[i]).scrollTop())
    //   // if ($($(b)[i]).offset().top === 0) {
    //   //   counter.value = i

    //   //   console.log("Sd")
    //   // }
    // }


    // console.log(hT)
    // var hT = $('.second').offset().top

    //   hH = $('.second').outerHeight(),
    //   wH = $('.body').height(),
    //   wS = $(this).scrollTop();
    // if (wS > (hT + hH - wH)) {
    //   console.log('H1 on the view!');
    // }
  });

})

</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

.rotate.roll {
    rotate: 160deg;
    transition: rotate 1s;
}

.rotate {
    transition: rotate 1s;
}
</style>
