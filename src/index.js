import { createApp } from 'vue'
import { createWebHistory, createRouter} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

// const Home = { template: '<div>Home111</div>' }
// const Detail = { template: '<div>About</div>' }
const routes = [
  { path: '/', component: Home },
  { path: '/detail/:id', component: Detail },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)

app.mount('#app')
