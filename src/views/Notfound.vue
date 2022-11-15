<!-- Vue Imports/Scripts -->
<script setup>
</script>

<template>
  <main class="main container">
    <h1>404 NotFound</h1>
    Voltar a <router-link to="/">Home</router-link>

    <div class="boxcolor">
      <div class="color color1">color1</div>
      <div class="color color2">color2</div>
      <div class="color color3">color3</div>
      <div class="color color4">color4</div>
      <div class="color color5">color5</div>
      <div class="color color6">color6</div>
    </div>

  </main>
</template>

<!-- Style -->
<style scoped>

div.boxcolor {
  display: flex;
}
div.color {
  border: 1px solid var(--black);
  padding: 50px;
  margin: 20px;
  color: red;
}
div.color1 {
  background-color: var(--color-first);
}
div.color2 {
  background-color: var(--color-first-clear);
}
div.color3 {
  background-color: var(--color-first-dark);
}
div.color4 {
  background-color: var(--white-var);
}
div.color5 {
  background-color: var(--color-second-clear);
}
div.color6 {
  background-color: var(--color-second-dark);
}

</style>
