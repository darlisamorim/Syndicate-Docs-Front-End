<!-- Vue Imports/Scripts -->
<script scoped>
  export default {
    name: "Nav"
  }
</script>

<!-- Construct -->
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>


</template>

<!-- Style -->
<style scoped>

</style>
