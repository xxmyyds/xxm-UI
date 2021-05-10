<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1"></Demo>
    <Demo :component="Switch2"></Demo>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch1 from './SwitchDemo/Switch1.demo.vue'
import Switch2 from './SwitchDemo/Switch2.demo.vue'
import Demo from './Demo.vue'
export default defineComponent({
  components: { Demo },
  setup() {
    return { Switch1, Switch2 }
  },
})
</script>
