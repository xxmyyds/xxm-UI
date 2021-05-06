<template>
  <div>
    <Switch v-model:value="bool"></Switch>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default defineComponent({
  components: { Switch },
  setup() {
    const bool = ref(false)
    return { bool }
  },
})
</script>
