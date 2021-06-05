// this is a dynamically created template

<template>
  <article class='blog'>
    <figure class='blog__hero'>
      <img :src='post.attributes.hero_image' :alt='post.attributes.title' width='1332' height='600'>
    </figure>
    <div class='blog__info'>
      <h2>This is: {{ post.attributes.title }}.</h2>
      <p>{{ formattedDate }}</p>
    </div>
    <div class='blog__body' v-html='post.html'></div>
    <div class='blog__footer'>
      <p>Written By: {{ post.attributes.author }}</p>
      <NuxtLink :to='`/blog/${nextBlogPath}`'>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 26 26'
             enableBackground='new 0 0 26 26'>
          <path
            d='M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z' />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
<script>
export default {
  layout: 'layout',
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    formattedTitle() {
      const words = this.slug.split("-");
      return words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
      }).join(' ');
    },
    formattedDate() {
      return new Date(this.post.attributes.date).toDateString().slice(4);
    },
    nextBlogPath() {
      const firstBlogPath = this.sortedPaths[0];
      // if there's no 'next' path, return the first path
      const nextPath = isNull(this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]) ? firstBlogPath : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1];

      function isNull(item) {
        return item === null || item === undefined;
      }

      return nextPath;
    }
  },
  // get the slug as a param to import the correct md file
  async asyncData({ params }) {
    try {
      const currentPath = params.slug;
      // get current post data
      const post = await import(`~/content/blog-posts/${params.slug}.md`);
      // get all post data for next route
      const allPosts = await require.context('~/content/blog-posts/', true, /\.md$/);
      const posts = allPosts.keys().map((key) => {
        return allPosts(key);
      });
      const sortedPosts = posts.sort((a, b) => {
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
      const sortedPaths = [];
      sortedPosts.map(post => {
        // clean up the path - split by /
        let relPath = post.attributes._meta.resourcePath.split('/');
        // get the end of the path, remove '.md'
        relPath = relPath[relPath.length - 1].slice(0, -3);
        sortedPaths.push(relPath);
      });
      return {
        sortedPaths,
        post,
        currentPath
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  },
  head() {
    return {
      title: 'This is ' + this.formattedTitle
    }
  }
};
</script>

<style scoped lang='scss'>
.blog {
  h1 {
    margin-block-end: 0.7rem;
  }

  .blog__hero {
    overflow: hidden;
    min-height: 300px;
    height: 60vh;
    width: 100%;
    margin: 0;

    img {
      min-width: 100%;
      min-height: 100%;
      margin-block-end: 0;
      object-fit: cover;
    }
  }

  .blog__info {
    text-align: center;
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;

    h2 {
      margin-block-end: revert;
    }

    h3 {
      margin-block-end: 0;
    }
  }

  .blog__body {
    width: 100%;
    padding: 0 1.25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      text-decoration: underline;
    }

    &:last-child {
      margin-bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      padding: 1.5rem 1rem;
      margin-block-end: 1.5rem;
    }

    p {
      font-weight: normal;

      img {
        margin-block: {
          start: 1rem;
          end: 1rem;
        }
      }
    }
  }

  .blog__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.25rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    h2, p {
      margin-block-end: 0;
    }

    a {
      svg {
        width: 20px;
      }
    }
  }
}

blockquote {
  border-left: 1px solid #000;

  p {
    margin: 0;
    padding: 1rem;
  }
}

@media (min-width: 768px) {
  .blog {
    display: block;

    .blog__body {
      max-width: 800px;
      padding: 0 2rem;
    }

    .blog__hero {
      min-height: 600px;
      height: 75vh;

      img {
        min-width: 100%;
      }
    }

    .blog__info {
      text-align: center;
      padding: 2rem 0;

      p {
        margin-block-end: 0;
      }
    }

    .blog__footer {
      padding: 2.25rem;
    }
  }
}

@media (min-width: 1440px) {
  .blog {
    .blog__hero {
      height: 70vh;
    }

    .blog__info {
      padding: 3rem 0;
    }

    .blog__footer {
      padding: 2rem;
    }
  }
}
</style>