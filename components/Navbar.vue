<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from "vue";

// const isHidden = ref(false);
// let lastScrollY = 0;

// const handleScroll = () => {
//   isHidden.value = window.scrollY > lastScrollY;
//   lastScrollY = window.scrollY;
// };

// onMounted(() => window.addEventListener("scroll", handleScroll));
// onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <h1>Navbar</h1>
  <!-- <nav :class="{ hidden: isHidden }" class="navbar">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <button @click="$emit('toggleDarkMode')">🌙</button>
  </nav> -->
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--bg-color);
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  transition: transform 0.3s ease-in-out;
}
.hidden {
  transform: translateY(-100%);
}
</style>
