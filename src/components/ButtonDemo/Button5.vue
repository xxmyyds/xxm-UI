<demo>
    支持 loading属性
</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../../lib/Button.vue'
export default defineComponent({
  components: { Button },
})
</script>
