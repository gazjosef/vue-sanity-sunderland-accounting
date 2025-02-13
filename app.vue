<script setup lang="ts">
// import { ref, onMounted } from "vue";

// const isDark = ref(false);

// onMounted(() => {
//   isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
// });

// const toggleDarkMode = () => {
//   isDark.value = !isDark.value;
//   document.documentElement.classList.toggle("dark", isDark.value);
// };
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style lang="scss">
:root {
  --bg-color: white;
  --text-color: black;
}
.dark {
  --bg-color: black;
  --text-color: white;
}
</style>
