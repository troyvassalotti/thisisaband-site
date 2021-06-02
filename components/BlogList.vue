<template>
  <main id='main'>
    <ul class='list' role='list'>
      <NuxtLink
        v-for='post in sortedPosts'
        :key='post.attributes.title'
        :to='`/blog/${formatSlug(post.attributes.title)}`'
      >
        <li>
          <div class='hero_image'>
            <img :src='post.attributes.hero_image' :alt='post.attributes.title'>
          </div>
          <div class='blogList__info'>
            <h2>{{ post.attributes.title }}</h2>
            <p>{{ formatDate(post.attributes.date) }}</p>
            <p>{{ formatExcerpt(post.body) }}...</p>
          </div>
        </li>
      </NuxtLink>
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
  a:hover {
    opacity: 1;

    li {
      div.hero_image {
        img {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }
    }
  }

  .hero_image {
    width: 100%;
    height: 33vh;
    overflow: hidden;
    background-color: #000;

    img {
      object-fit: cover;
      object-position: 50% 50%;
      opacity: 1;
      transition: opacity 0.3s ease;
      min-height: 100%;
    }
  }

  .blogList__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 1.25rem;
    border-bottom: 1px solid #ebebeb;

    h2,
    h3,
    p {
      transform: translateX(0px);
      transition: transform 0.5s ease-out;
    }
  }

  li {
    opacity: inherit;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 38vh;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 900px;
  }
}

@media (min-width: 768px) {
  .list {
    a:hover {
      opacity: 1;

      li {
        div.hero_image {
          img {
            opacity: 0.8;
            -webkit-transition: opacity 0.3 ease;
            transition: opacity 0.3s ease;
          }
        }

        div.blogList__info {
          h2,
          h3,
          p {
            transform: translateX(10px);
            transition: transform 0.5s ease-out;
          }
        }
      }
    }

    li {
      min-height: 250px;
      height: 33.333vh;
      flex-direction: row;
    }

    .hero_image {
      height: 100%;

      img {
        min-width: 100%;
        height: 100%;
        width: auto;
        min-height: 0;
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

    h3 {
      margin-bottom: 1.2rem;
    }
  }
}

</style>