// const { createSSRApp } = require('vue')
// const { renderToString } = require('@vue/server-renderer')
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from '../src/App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '../src/routes'
import store from './store'

export async function render(req, res) {
  const router = createRouter( {
    history:createMemoryHistory(),
    routes
  })

  const app = createSSRApp(App)

  app.use(router)

  await router.push(req.url)
  await router.isReady()

  const matchedComponent = router.currentRoute.value.matched.flatMap(record =>
    Object.values(record.components)
  )

  let componentPreFetch
  if (matchedComponent[0] && matchedComponent[0].asyncFetch) {
    try {
      componentPreFetch = await matchedComponent[0].asyncFetch(
        {params: router.currentRoute.value.params}
      )
      store.initData = componentPreFetch
    } catch (e) {
      console.log(e)
    }
  }
  
  const appContent = await renderToString(app)
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${appContent}</div>
    <script>window.INIT_DATA = '${JSON.stringify(componentPreFetch)}'</script>
    <script src="/main.bundle.js"></script>
  </body>
  </html>
  `

  res.send(html)
}