<template>
  <div>
    <h1>Tabs 组件示例</h1>
    <Demo :component="Tabs1"></Demo>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs1 from './TabsDemo/Tabs1.vue'
import Demo from './Demo.vue'
export default defineComponent({
  components: { Demo },
  setup() {
    return { Tabs1 }
  },
})
</script>
