<demo>
    常规使用
</demo>
<template>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="visible" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>内容1</div>
      <div>内容2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return {
      visible,
      toggle,
      f1,
      f2,
    }
  },
})
</script>
