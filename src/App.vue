<script setup lang="ts">

  import PlaygroundHeader from './components/PlaygroundHeader.vue' 
  import PlaygroundSidebar from './components/PlaygroundSidebar.vue' 
</script> 

<template> 
  <div class="playground"> 
    <div class="playground-background" aria-hidden="true"> 
      <span class="ambient-glow ambient-glow-cyan"></span> 
      <span class="ambient-glow ambient-glow-violet"></span> 
    </div>

    <PlaygroundHeader />

    <div class="playground-body">
      <PlaygroundSidebar />

      <RouterView />
    </div>
  </div> 
</template>