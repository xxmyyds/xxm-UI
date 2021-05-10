<template>
  <div>
    <h2>Button 示例</h2>
    <Demo :component="Button1"></Demo>
    <Demo :component="Button2"></Demo>
    <Demo :component="Button3"></Demo>
    <Demo :component="Button4"></Demo>
    <Demo :component="Button5"></Demo>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Demo from './Demo.vue'
import Button1 from './ButtonDemo/Button1.vue'
import Button2 from './ButtonDemo/Button2.vue'
import Button3 from './ButtonDemo/Button3.vue'
import Button4 from './ButtonDemo/Button4.vue'
import Button5 from './ButtonDemo/Button5.vue'
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      Button1,
      Button2,
      Button3,
      Button4,
      Button5,
    }
  },
})
</script>
