<template>
  <h1>App</h1>
  <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div :class="{ dark: isDark }">
      <Navbar @toggleDarkMode="toggleDarkMode" />
      <slot />
      <Footer :year="new Date().getFullYear()" />
    </div>
  </div> -->
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
