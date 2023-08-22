<template>
    <div>
        乾杯！♥
    </div>
</template>

<!--This is 组合式API的方法啦-->
<script setup>
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id); //就可以get来自App.vue的参数啦，id系Tequila!
    const props=defineProps({
        id:String  //id为数据类型，而且数据要转为String类型才能传得，传到后台服务器自动复原原来的类型
    })
    console.log(props);
</script>
