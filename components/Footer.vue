<script setup lang="ts">
// defineProps<{ year: number }>();
</script>

<template>
  <footer class="footer">
    <h1>Footer</h1>
    <!-- <img src="/logo.svg" alt="Logo" class="footer__logo" />
    <p>© {{ year }} Your Company</p>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav> -->
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--bg-color);
  padding: 2rem;
  text-align: center;
  &__logo {
    width: 50px;
  }
}
</style>
