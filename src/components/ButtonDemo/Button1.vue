<demo>
    常规使用
</demo>
<template>
  <div>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../../lib/Button.vue'
export default defineComponent({
  components: { Button },
})
</script>
