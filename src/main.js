 import './assets/css/main.css'


 import 'bootstrap/dist/css/bootstrap.css'
 import 'bootstrap-vue/dist/bootstrap-vue.css'
 import 'bootstrap/dist/js/bootstrap.js'
 import 'bootstrap/dist/js/bootstrap.min.js'




 import { createApp } from 'vue'
 import App from './App.vue'
 import router from './router'

 const app = createApp(App)

 app.use(router)

 app.mount('#app')