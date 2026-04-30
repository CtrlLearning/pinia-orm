import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import { createORM } from '@ctrllearning/pinia-orm'
import { createPiniaOrmAxios } from '@ctrllearning/pinia-orm-axios'
import axios from 'axios'

const app = createApp(App)

const pinia = createPinia()
const piniaOrm = createORM({
  plugins: [
    createPiniaOrmAxios({
      axios,
    }),
  ],
})

pinia.use(piniaOrm)

app.use(pinia)
app.mount('#app')
