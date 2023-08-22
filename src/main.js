import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' //点样挂载

import {createPinia} from "pinia" //挂载Pinia

const app=createApp(App)//用const = 去挂载
app.use(router) //要先use哦

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
