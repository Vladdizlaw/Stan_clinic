
<script setup>
import image_1 from '@/assets/1.png'
import image_2 from '@/assets/2.png'
import image_3 from '@/assets/3.png'
import image_4 from '@/assets/4.png'
import image_5 from '@/assets/5.png'
import image_6 from '@/assets/6.png'
import image_7 from '@/assets/7.png'
const props = defineProps({
    srcs: {
        type: Array,
        require: true,
        default: [image_1, image_2, image_3, image_4, image_5, image_6, image_7]
    }
})
const srcIndex = ref(0)


</script>
<template>
    <div class="flex  h-full relative main">
        <svg @click="srcIndex<props.srcs.length-1?srcIndex++:srcIndex=0" class=" btn absolute  left-[-5rem] mr-5 cursor-pointer" width="39"
            height="97" viewBox="0 0 39 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M39 90.3768L15.0661 48.4885L39 6.60017L27.7179 0.00969597L8.0549e-06 48.4885L27.7179 96.9907L39 90.3768Z"
                fill="#00843E"  />
        </svg>

        <div class="lg:w-[42vw] sm:w-[4vw]">

            <img :src="props.srcs[srcIndex]" alt="" class="w-full img">

        </div>
        <svg class="btn ml-5 cursor-pointer absolute  right-[-5rem]" @click="0<srcIndex?srcIndex--:srcIndex=props.srcs.length-1" width="39"
            height="97" viewBox="0 0 39 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.62322L23.9339 48.5115L0 90.3998L11.2821 96.9903L39 48.5115L11.2821 0.00927734L0 6.62322Z"
                fill="#00843E" />
        </svg>

    </div>
</template>
<style scoped>
.main{
    width:100%;
}
.img{
    user-select: none;
}
.btn {
    top:42%;

    transition: 0.2s;
}
@media (max-width: 666px) {
    .main{
          width:60%;
    }
    .btn{
        transform:scale(0.5);
        top:1%;
    }
  
}
.btn:active {
    transform: scale(0.9)
}
</style>