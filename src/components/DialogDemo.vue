<template>
  <div>
    <h2>Dialog 示例</h2>
    <Demo :component="Dialog1"></Demo>
    <Demo :component="Dialog2"></Demo>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog1 from './DialogDemo/Dialog1.vue'
import Dialog2 from './DialogDemo/Dialog2.vue'
import Demo from './Demo.vue'

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1,
      Dialog2,
    }
  },
})
</script>
