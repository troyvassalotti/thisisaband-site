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