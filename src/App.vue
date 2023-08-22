<script setup>
import HelloWorld from './components/HelloWorld.vue'
//import store from './store' //但是我在setup欸 ->下面import到啦！

  import {mainStore} from './store/index'
  const store = mainStore()

</script>

<script>
import store from './store' 
// vue3 设置状态管理
// provide/inject 跨级通信

//Home就作为App的子组件
import Home from './views/Home.vue'
export default{
  provide:{ //哩度已经将store提供出去啦，咁样子组件就可以接受inject使用啦-> 去子组件Home度睇下啦
    store
  },
  components:{
    Home, //咁样注册了Home
  }, 
}
</script>

<template>
  <div>
    <!--vue router是基于路由和组件，路由是用来设定访问路径，将庐江和组件-->
    <h2>Hey my puppy!</h2>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <!--使用一个自定义组件 router-link 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。-->
      <!--to="路径" d.h. index里面的path-->
    <router-link to="/">Go to Home</router-link><br/>
    <router-link to="/about">Go to About</router-link><br/>
    <router-link to="/OptionA/Bird">Go to OptionA</router-link> <!--比如这里传一只bird过去--> <br/>
    <router-link to="/Page">Come to me!</router-link> <br/>
    <router-link to="/Alcohol/Tequila">Let's drink ♥</router-link> <br/>


    <router-link to="/Piggie">うそ!</router-link> <br/><br/>
    <router-link to="/Sweet/Chocolat">Bite me!</router-link>
    <!--<router-link :to="{name:'almond',params:{id:Chocolat}}">Bite me!</router-link> No match for {"name":"almond","params":{"id":""}}-->
  </p>
  <!-- 路由出口, 占位符 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <br/><br/><br/>

  <h2>{{ store.age }}</h2> <!-- why i cant get message: 'Puppy!' from store -->
  </div>
  <!--<HelloWorld msg="Vite + Vue" />-->

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
