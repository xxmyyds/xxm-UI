import './lib/xxm.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import markdown from './components/Markdown.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('markdown', markdown)
