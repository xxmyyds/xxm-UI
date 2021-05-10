<demo>
    一键打开对话框
</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../../lib/Button.vue'
import { openDialog } from '../../lib/openDialog'
export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
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
      showDialog,
    }
  },
})
</script>
