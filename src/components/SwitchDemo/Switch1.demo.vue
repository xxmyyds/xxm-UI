<demo>
    常规用法
</demo>

<template>
  <Switch v-model:value="bool"></Switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from '../../lib/Switch.vue'

export default defineComponent({
  components: { Switch },
  setup() {
    const bool = ref(false)
    return { bool }
  },
})
</script>
