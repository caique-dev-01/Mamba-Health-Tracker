<template>
  <div class="flex flex-col items-center min-h-screen">
    <HeaderApp />
    <main class="flex-1 flex flex-col w-full px-4 py-6">
      <RouterView />
    </main>
    <FooterApp />
  </div>
</template>

<script setup lang="ts">
import HeaderApp from './components/Header.vue'
import FooterApp from './components/Footer.vue'
</script>
