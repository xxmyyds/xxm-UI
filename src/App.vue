<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { router } from './router'
export default defineComponent({
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    provide('menuVisible', menuVisible)
    router.afterEach(() => {
      if (width <= 500) {
        console.log('xxm')

        menuVisible.value = false
      }
    })
  },
})
</script>
