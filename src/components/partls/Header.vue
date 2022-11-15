<!-- Vue Imports -->
<script>
  export default {
    name: "Header"
  }
</script>

<!-- Construct -->
<template>

    <header class="header container__flex">

      <div class="content__flex">

        <h1 class="logotipo">
          <a title="" href="/">
            <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" />
            <span class="">Nol</span>
          </a>
        </h1>

        <nav class="menu">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/docs">Docs</RouterLink>
          <RouterLink to="/notfound">404</RouterLink>
        </nav>

      </div>

    </header>
    <!-- Header -->

</template>

<!-- Style -->
<style scoped>

  .header {
    position: fixed;
    max-height: 80px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(4px);
    background-color: var(--color-white-hsla);
  }
  .header .content__flex {
    align-items: center;
    justify-content: space-between;
  }

  .logotipo {
    padding: 10px 0;
  }
  .logotipo img {
    height: 60px;
  }

  .menu a {
    color: var(--color-first-clear);
    border-left: 1px solid var(--color-border);
  }
  .menu a.router-link-exact-active {
    color: var(--color-black);
  }

  .menu a.router-link-exact-active:hover {
    background-color: transparent;
  }

  .menu a {
    display: inline-block;
    padding: 0 1rem;
  }

</style>