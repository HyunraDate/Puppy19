<template>
    <div>
        <h2>See by Me</h2>
        <button @click="goPage">to you</button>
    </div>
</template>

<script>
export default {
    methods:{
        goPage:function(){
            //console.log(this.$router);
            // this.$router.plus('/') 这里跳转不了欸
            //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

            //带参数
            this.$router.push({path:'/Sweet/Chocolat'}) //成功跳转了！！ id就是Chocolat!
            //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸
            // Chocolat is not defined (???)
        }
    }
}
</script>