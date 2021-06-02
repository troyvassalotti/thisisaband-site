<template>
  <main class='thanks' id='main'>
    <h2>Thanks!</h2>
    <p>Your submission is being passed along the internet all the way to my inbox.</p>
    <p>
      <NuxtLink to='/'>
        Back to the blog.
      </NuxtLink>
    </p>
  </main>
</template>

<script>
export default {
  layout: 'layout',
  data() {
    return {
      title: 'thanks'
    }
  },
  head() {
    return {
      title: this.title,
      meta: {
        name: 'robots',
        content: 'noindex nofollow'
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.thanks {
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
</style>