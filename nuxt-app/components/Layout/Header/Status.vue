<template>
  <section class="topbar">
    <div class="container">
      <div class="topbar__phone"><FaPhone /> 02 9644 9220</div>
      <div class="topbar__social-media">
        <FaFacebook />
        <FaGooglePlus />
        <FaLinkedin />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPhone } from 'vue3-icons/fa'
</script>

<style scoped>
.topbar {
  /* Add your styles here */
}
</style>
