
<script setup>
import image_1 from '@/assets/1.png'
import image_2 from '@/assets/2.png'
import image_3 from '@/assets/3.png'
import image_4 from '@/assets/4.png'
import image_5 from '@/assets/5.png'
import image_6 from '@/assets/6.png'
import image_7 from '@/assets/7.png'
const props= defineProps({
    srcs:{
        type:Array,
        require:true,
        default:[image_1,image_2,image_3,image_4,image_5,image_6,image_7]
    }
    })
  const srcIndex=ref(0)  
  

</script>
<template>
<div class="flex w-full h-full">
    <img src="../assets/right.svg" class="rotate-180 mr-5 cursor-pointer" alt="" @click="srcIndex<props.srcs.length-1?srcIndex++:srcIndex=0">
    <div class="lg:w-[42vw] sm:w-[4vw]">
        <client-only>
        <img :src="props.srcs[srcIndex]" alt="" class="w-full" >
    </client-only>
    </div>
    <img src="../assets/right.svg" class="ml-5 cursor-pointer" alt="" @click="0<srcIndex?srcIndex--:srcIndex=props.srcs.length-1">
</div>
</template>