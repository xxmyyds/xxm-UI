<template>
  <div>
    <Topnav></Topnav>
    <div class="banner">
      <h1>xxm UI</h1>
      <h2>一个很Cool的 UI 框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Topnav from '../components/Topnav.vue'
export default defineComponent({
  components: {
    Topnav,
  },
})
</script>

<style lang="scss" scoped></style>
