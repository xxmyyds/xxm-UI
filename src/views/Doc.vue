<template>
  <div>
    <Topnav></Topnav>
    <div class="content">
      <aside>侧边栏</aside>
      <main>主内容</main>
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
