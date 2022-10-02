<template>
    <div class="wrapper">
    <div class="flex flex-col items-center justify-center modal">
        <img src="../assets/close.svg" class="close" @click="emit('update:visible',false)"/>
        <p class="title">Записаться</p>
        <input class="input" placeholder="Имя" v-model="name" />
        <input v-maska="'+7 (###) ###-##-##'" class="input" placeholder="Номер телефона" v-model="phone"/>
        <p v-if="error" class="text-red-500">Введите имя и телефон</p>
        <p class="message">Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных данных</p>
        <button @click="handleSubmit" class="button">Отправить</button>
    </div></div>
</template>


<script setup>
// import {ref,defineEmits,defineProps} from "vue"
import axios from 'axios'
const props=defineProps({'visible':{type:Boolean}})
const emit=defineEmits(['update:visible','submit'])
let name=ref('')
let phone=ref('')
let error=ref(false)
async function  handleSubmit(){
    if (!name.value||!phone.value){
        error.value=true
        setTimeout(()=>{
            error.value=false
        },1000)
        return
    }
    error.value=false
    await axios.post('/api/message', {
   name:name.value,
   phone:phone.value
  })
    .then((res) => {
      // On clear le formulaire
      name.value = ''
      phone.value = ''
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style lang="css" scoped>
    .wrapper{
    width:100%;
    height:100%;
    position:absolute;
       top:0;
       left:0; 
    /* filter: blur(2px); */
    /* z-index:10; */
    display:flex;
    justify-content:center;
    align-items: center;
    
}
.modal{
    /* position:absolute; */
    background-color: white;
    border-radius:1rem;
    width:max(30vw,20rem);
    height:max(35vh,17rem);
    z-index:100;
    position :relative;
    border:1px solid rgb(43, 41, 41);
    filter: drop-shadow(10px 15px 4px #206891);
}
.title{
    font-family: 'AGOptCyrillic Normal';
font-style: normal;
font-weight: 700;
font-size: max(3vw,2rem);
color: #009748;
text-align: center;
}
.input{
    border:0px solid white;
    border-bottom:1px solid grey;
    width:80%;
    margin-bottom:2rem;
}
.close{
    position:absolute;
    top:1rem;
    right:1rem;
    width:1rem;
}
.message{
    display:flex;
    justify-content: center;
    font-family: 'AGOptCyrillic Normal';
    font-size: max(1vw,0.5rem);
    font-weight: 700;
    width:80%;
    margin-bottom:1rem;
}
.button{
    padding: 0.5rem;
  background: linear-gradient(179.99deg, #70D7FD 23.43%, #94C5E9 98.73%);
  color: white;
  border-radius: 2rem;
  border: none;
  font-family: AGOptCyrillic Normal;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  cursor: pointer;
}

</style>