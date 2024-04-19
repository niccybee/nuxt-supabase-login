<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>
<template>
  <main>
    <comment-list></comment-list>
    <input-box></input-box>
  </main>
</template>
