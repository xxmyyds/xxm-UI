<demo>
    支持 disabled属性
</demo>
<template>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../../lib/Button.vue'
export default defineComponent({
  components: { Button },
})
</script>
