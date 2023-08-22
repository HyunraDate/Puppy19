<template>
    <div>Oh!</div>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    console.log(useRoute().params.id); //就可以get来自App.vue的参数啦，id系Bird
</script>