<template>
  <h1>Dialog 示例</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>xxm</div>
      <div>xxmyyds</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>Dialog 示例2</h1>
  <Button @click="showDialog">toggle</Button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    const showDialog = () => {
      openDialog({
        title: 'xxmyyds',
        content: 'xxm',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
        closeOnClickOverlay: false,
      })
    }
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog,
    }
  },
})
</script>
