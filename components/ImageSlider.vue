
<script setup>
const props= defineProps({
    srcs:{
        type:Array,
        require:true,
        default:["./assets/1.png","../assets/2.png","../assets/3.png","../assets/4.png","../assets/5.png","../assets/6.png","../assets/7.png",]
    }
    })
  const srcIndex=ref(0)  
  

</script>
<template>
<div class="flex w-full h-full">
    <img src="../assets/right.svg" class="rotate-180 mr-5 cursor-pointer" alt="" @click="srcIndex<props.srcs.length-1?srcIndex++:srcIndex=0">
    <div class="lg:w-[42vw] sm:w-[4vw]">
        <img :src="props.srcs[srcIndex]" alt="" class="w-full" >
    </div>
    <img src="../assets/right.svg" class="ml-5 cursor-pointer" alt="" @click="0<srcIndex?srcIndex--:srcIndex=props.srcs.length-1">
</div>
</template>