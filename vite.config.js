import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{//this is 中转服务器
    proxy:{ //通过代理实现跨域 咁前面Home.Vue度就唔可以系http哩个域名啦
      //咁落面你path就系你要代理嘅地址，bspl：https://i.maoyan.com/
      '/path':{
        target:'https://i.maoyan.com/', //替换的服务端地址
        changeOrigin: true, //开启代理，允许跨域
        rewrite:path=>path.replace (/^\/path/,'') //设置重写的路径
      }
    }


  }
})
