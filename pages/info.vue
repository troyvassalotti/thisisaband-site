<template>
  <main class='info_blurb' id='main'>
    <h2>{{ data.description }}</h2>
    <section v-html='data.cta'></section>
    <ul role='list'>
      <li>
        <p>
          <a :href='`mailto:${data.contact.email}`'>Email: {{ data.contact.email }}</a>
        </p>
      </li>
      <li>
        <p>
          <a :href='`https://twitter.com/${data.contact.twitter_handle}`'>Twitter: @{{ data.contact.twitter_handle
            }}</a>
        </p>
      </li>
      <li>
        <p>
          <a :href='`https://github.com/${data.contact.github_handle}`'>Github: {{ data.contact.github_handle }}</a>
        </p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  layout: 'layout',
  computed: {
    isInfoPage() {
      return this.$nuxt._route.name === 'info' && true;
    }
  },
  async asyncData() {
    try {
      const data = await import(`~/content/data/info.json`);
      return {
        data
      };
    } catch (err) {
      return false;
    }
  },
  head() {
    return {
      bodyAttrs: {
        style: this.isInfoPage && `background-color: ${this.data.background_color}; color: ${this.data.text_color}`
      }
    };
  }
};
</script>

