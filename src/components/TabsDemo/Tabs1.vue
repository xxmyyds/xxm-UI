<demo>
    常规用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
export default defineComponent({
  components: { Tabs, Tab },
  setup() {
    const selected = ref('导航2')
    return { selected }
  },
})
</script>
