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
    <SubmitForm />
  </main>
</template>

<script>
import SubmitForm from '~/components/SubmitForm.vue';

export default {
  layout: 'layout',
  components: {
    SubmitForm
  },
  computed: {
    isInfoPage() {
      return this.$nuxt._route.name === 'info' && true;
    }
  },
  data() {
    return {
      title: 'info',
      description: 'This is a blog about music for people who like music.'
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
      },
      title: this.title,
      description: this.description
    };
  }
};
</script>

<style scoped lang='scss'>
.info_blurb {
  max-width: 800px;
  padding: 1.5rem 1.25rem;
  color: inherit;

  h2 {
    margin-bottom: revert;
  }

  a {
    text-decoration: underline;
  }
}

@media (min-width: 768px) {
  .info_blurb {
    padding: 2rem;
  }
}

@media(min-width: 1440px) {
  .info_blurb {
    padding: 3rem;
  }
}
</style>