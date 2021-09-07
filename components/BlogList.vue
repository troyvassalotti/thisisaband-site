<template>
  <main id='main'>
    <ul class='list' role='list'>
      <li v-for='post in sortedPosts'
          :key='post.attributes.title'>
        <NuxtLink
          :to='`${formatSlug(post.attributes.title)}`'
        >
          <div class='hero_image'>
            <img :src='post.attributes.hero_image' :alt='post.attributes.title' width='400' height='250'>
          </div>
          <div class='blogList__info'>
            <h2>{{ post.attributes.title }}</h2>
            <p>{{ formatDate(post.attributes.date) }}</p>
            <p>{{ formatExcerpt(post.body) }}...</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedPosts() {
      const sortedPosts = this.posts;
      sortedPosts.sort((a, b) => {
        const dateA = new Date(a.attributes.date);
        const dateB = new Date(b.attributes.date);
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
        return 0;
      });
      return sortedPosts;
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toDateString().slice(4);
    },
    formatExcerpt(body) {
      return body.slice(0, 200).trimEnd();
    },
    formatSlug(title) {
      const regex = / /gi;
      return title.toLowerCase().trim().replace(regex, '-');
    }
  }
};
</script>

/*
TODO -- i would love to figure out how to show the md in the summary...
right now its just plaintext not sure how to target the loader to parse this
*/

<style scoped lang='scss'>
.list {
  a {
    color: inherit;
    display: flex;
    flex-direction: column;
    min-height: 38vh;
    opacity: inherit;
    text-decoration: none;

    &:hover {
      .hero_image {
        img {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }
    }
  }

  .hero_image {
    height: 33vh;
    overflow: hidden;
    width: 100%;

    img {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }

  .blogList__info {
    border-bottom: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.25rem;

    h2,
    h3,
    p {
      transition: transform 0.5s ease-out;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 900px;
  }
}

@media (min-width: 768px) {
  .list {
    a {
      height: 33.333vh;
      flex-direction: row;
      min-height: 250px;

      &:hover {
        .blogList__info {
          h2, p {
            transition: transform 0.5s ease-out;
            transform: translateX(10px);
          }
        }
      }
    }

    .hero_image {
      height: 100%;

      img {
        height: 100%;
        min-height: 0;
        width: auto;
      }
    }

    .blogList__info {
      min-width: 70%;
    }
  }
}

@media (min-width: 1280px) {
  .list {
    .blogList__info {
      padding: 3rem;
    }
  }
}
</style>