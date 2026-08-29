<script setup lang="ts">
import PlaygroundHeader from './components/PlaygroundHeader.vue'
import PlaygroundSidebar from './components/PlaygroundSidebar.vue'

</script>

<template>
  <div class="playground">
    <PlaygroundHeader />

    <div class="playground-body">
      
      <PlaygroundSidebar />

      <RouterView />

    </div>
  </div>
</template>
