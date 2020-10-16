const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  siteMetadata: {
    title: `Linuxsucks`,
    siteUrl: `https://linuxsucks.ru`,
    description: `Новости, которые ты заслужил`,
    copyrights: '',
    author: `Innsmouth-Trip`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'Linuxsucks',
    defaultTheme: 'dark',
    postsPerPage: 5,
    showMenuItems: 2,
    menuMoreText: 'Show more',
    mainMenu: [
      {
        title: 'О нас',
        path: '/about',
      },
      // {
      //   title: 'Showcase',
      //   path: '/showcase',
      // },
      // {
      //   title: 'Example',
      //   path: '/example',
      // },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
   resolve: `gatsby-plugin-sitemap`,
   options: {
     sitemapSize: 5000
   },
 },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
         resolve: `gatsby-plugin-yandex-metrika`,
         options: {
           // The ID of yandex metrika.
           trackingId: 68235538,
           // Enabled a webvisor. The default value is `false`.
           webvisor: false,
           // Enables tracking a hash in URL. The default value is `false`.
           trackHash: false,
           // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
           // and `true` means after the body (faster loading, less hits). The default value is `false`.
           afterBody: false,
           // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
           // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
           defer: false,
         },
       },
       {
     resolve: 'gatsby-plugin-robots-txt',
     options: {
       sitemap: 'https://linuxsucks.ru/sitemap.xml',
       host:  false,
       policy: [{ userAgent: '*', allow: '/' }]
     }
   },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hello-friend`,
        short_name: `hello-friend`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
}
