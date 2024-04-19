<script setup lang="ts"></script>
<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">/</nuxt-link></li>
        <li><nuxt-link to="/app">/app</nuxt-link></li>
        <li><nuxt-link to="/signup">/signup</nuxt-link></li>
        <li><nuxt-link to="/login">/login</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
