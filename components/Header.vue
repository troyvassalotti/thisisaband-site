<template>
  <header class='header'>
    <nav class='nav'>
      <NuxtLink to='/'>
        <h1>This is a Band</h1>
      </NuxtLink>
      <div>
        <h2>
          <NuxtLink :to='infoRoute'>{{ isInfoPage ? 'close' : 'info' }}</NuxtLink>
        </h2>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isInfoPage: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    infoRoute() {
      return this.isInfoPage ? '/' : '/info';
    }
  }
};
</script>

<style scoped lang='scss'>
.header {
  h1 {
    margin-bottom: 0;
  }
}

.nav {
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  img {
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  .header {
    height: 100vh;
    position: sticky;
    top: 0;
  }

  .nav {
    padding: 2rem;
    height: 100%;
    border-right: 1px solid var(--border-color);
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>