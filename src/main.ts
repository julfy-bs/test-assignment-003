import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/style/tailwind.css'
import Mask from 'maska'

const app = createApp(App)

app
  .use(store)
  .use(Mask)
  .mount('#app')
