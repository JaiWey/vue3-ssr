import { createApp, createSSRApp } from 'vue'
import { createWebHistory, createRouter} from 'vue-router'
import App from './App.vue'
import routes from './routes'
// const Home = { template: '<div>Home111</div>' }
// const Detail = { template: '<div>About</div>' }
import store from '../ssr/store'
try {
  if (window) {
    store.initData = window.INIT_DATA ? JSON.parse(window.INIT_DATA) : undefined;
  }
} catch(e) {
}
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createSSRApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
//app.mount('#app')
