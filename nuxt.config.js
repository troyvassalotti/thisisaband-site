import path from 'path';
/* eslint-disable */
const glob = require('glob');
const config = require('./content/data/config.json');
/* eslin-enable */
const dynamicRoutes = getDynamicPaths({
  '/blog': 'content/blog-posts/*.md'
});

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: config.title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: config.description || ''
      },
      {
        name: 'twitter:title',
        content: config.title || ''
      },
      {
        name: 'twitter:description',
        content: config.description || ''
      },
      {
        name: 'twitter:image',
        content: '/android-chrome-512x512.png'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/modern-reset.scss', '@/assets/styles/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Using frontmatter-markdown-loader here to parse md files
     */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'content/blog-posts')
        });
    }
  },
  generate: {
    routes: dynamicRoutes
  }
};
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */

/* referenced https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
      return routes;
    })
  );
}
