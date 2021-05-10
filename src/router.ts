import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import { h } from '@vue/runtime-core'
import markdown from './components/Markdown.vue'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import intro from './markdown/intro.md'
const md = (string) => h(markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        {
          path: 'intro',
          component: md(intro),
        },
        {
          path: 'get-started',
          component: md(getStarted),
        },
        {
          path: 'install',
          component: md(install),
        },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs },
      ],
    },
  ],
})
