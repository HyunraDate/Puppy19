<template>
    <div>home</div><br/>
    <div>
    <div>{{ store.state.msg }}</div><br/>
    <button @click="updateMsg">Sing it</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    inject: ['store'], //接受来自父组件App provide嘅store
    // Path http:localhost:?? i need a Server
    //**fetch** //原生JS, 是http数据请求得的一种方式，背后用的是promise API，不是AJAX xhr

    //get到数据之后要进行渲染
    data(){
        return{
            bannerslist:[]
        }
    },
    created(){
        /*const data= fetch ("./data.json")
        then((res) => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.error(err));
        */
       
        // //fetch返回promise对象
        // //但系fetch 接的是后端服务器的端口
        // fetch('http://localhost:5173/').then((res)=>{ // This is ES6的方法

        //     //json()将响应的body，解析json的promise
        //     //console.log(res.json());
        //     //*But: Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        //     //This is localhost *(local server)
        //     return res.json()
        // }).then((res)=>{ //this is 回调成功的数据
        //     console.log(res);
        // })


    //axios 需要安装和引入哦
    //也是向后台发送请求来获取数据 基于promise的http库 
    // axios.get('../store/data.json').then((res)=>{ //how can i load this json path?
    //     console.log(res);
    // })
    // //https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4 试下去get 猫眼电影嘅hot json
    // },
    
    axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then((res)=>{
        //有跨域问题， 因为浏览器有同源策略的保护机制，所以可以通过proxy实现跨域请求数据 ->去vite.config.js 改
        console.log(res);
    });
    },

    methods:{
        updateMsg: function(){
            this.store.updateMsg();
        },
    },

};
</script>