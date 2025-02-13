<template>
  <div :class="{ dark: isDark }">
    <Navbar @toggleDarkMode="toggleDarkMode" />
    <NuxtPage />
    <Footer :year="new Date().getFullYear()" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};
</script>

<style lang="scss">
:root {
  --bg-color: white;
  --text-color: black;
}

.dark {
  --bg-color: black;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>
