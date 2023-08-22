//哩度放数据 Ziel:状态集中管理
//实现响应式
/* how-> setup里 通过 ref 和 reactive 
ref 定义字符串和数值
reactive 定义引用类型（对象）

对象就存储这状态 {{}} （Vue中）里面， like msg, age, counter
放在reactive里作为属性就得啦

*/

import {reactive} from 'vue'
import {defineStore} from 'pinia' //要导入使用大菠萝！创建store 规定叫defineStore 独一无二！

const store={
    state:reactive({ //hier定义状态 （属性）
        msg: "君よりもっと 素敵なひとも"
    }),
    updateMsg:function(){ //hier可以改变状态 (方法)
        this.state.msg='君以上の人にはなれないからさ'
    }
}

export const mainStore = defineStore ('main', { //hier main是唯一的ID，也可以自己起名字啦
    state: () => { //这里必须是一个函数，需要返回一个对象出去，为了防止数据污染 -> data(){return{}}
        return {
            age: 19
        }
    },
    getters:{ //相当于computed计算属性
        getterAge(state){
            return state.age +1;
        },

    },

    //vuex --> actions(context, data){}
    actions:{ //相当于methods
        addAge(){
            //this指向对应的store仓库
            this.age++;
        }


    }
})



//how to in App组件中通过provide提供
export default store