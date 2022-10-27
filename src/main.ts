import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/* 配置qiankun子应用 */
registerMicroApps([
  {
    name: 'vue-app',
    entry: 'http://localhost:8080/',
    container: '#sub-app',
    activeRule: '/sub',
    props: {
      routerBase: '/sub',
    },
  },
])
setDefaultMountApp('/sub/test')
start()
