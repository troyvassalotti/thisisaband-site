<template>
  <section class='layout'>
    <Header :is-info-page='isInfoPage' />
    <div class='content'>
      <nuxt />
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  },
  computed: {
    isInfoPage() {
      return this.$nuxt._route.name === 'info' && true;
    }
  }
};
</script>

<style scoped lang='scss'>
.layout {

  &.info_page {
    color: #EBEBEB;
  }
}

@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 30vw 1fr;
  }
}
</style>