<!-- Vue Imports/Scripts -->
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from "@/components/partls/Header.vue";
  import Footer from "@/components/partls/Footer.vue";
</script>

<!-- Construct -->
<template>

  <Header />
  <!-- Header -->

    <RouterView />
    <!-- Main -->

  <Footer />
  <!-- Footer -->

</template>

<!-- Style -->
<style scoped>
</style>
