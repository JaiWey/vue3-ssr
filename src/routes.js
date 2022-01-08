import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:id', component: Detail },
]

export default routes