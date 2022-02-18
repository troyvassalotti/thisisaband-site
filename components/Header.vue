<script>
export default {
  props: {
    isInfoPage: Boolean
  },
  computed: {
    infoRoute() {
      return this.isInfoPage ? "/" : "/info/";
    }
  }
};
</script>

<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink to="/">
        <h1>This is a Band</h1>
      </NuxtLink>
      <div>
        <h2>
          <NuxtLink :to="infoRoute">{{ isInfoPage ? "close" : "info" }}</NuxtLink>
        </h2>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.nav {
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .header {
    block-size: 100vh;
    position: sticky;
    top: 0;
  }

  .nav {
    align-items: flex-start;
    block-size: 100%;
    border-bottom: none;
    border-right: 1px solid var(--border-color);
    flex-direction: column;
    padding: 2rem;
  }
}
</style>