/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Клиника Амирханова`,
    siteUrl: `https://amirkhanov-clinic.ru/`,
    description:
      '«Клиника Амирханова» — это многопрофильное медицинское учреждение, которое объединило в себе клинику в новом просторном здании с широким спектром лечения различных болезней',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/content/data/`,
      },
    },
    'gatsby-transformer-csv',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'doctors-mdx',
        path: './src/content/doctors-mdx',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'service',
        path: './src/content/services',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          components: 'src/components',
        },
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     gfm: true,
    //     footnotes: true,
    //     // blocks: ["h2"], Blocks option value can be provided here as an array.
    //     excerpt_separator: `<!-- end -->`,
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 740,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //       `gatsby-remark-copy-linked-files`,
    //       {
    //         resolve: `gatsby-remark-smartypants`,
    //         options: {
    //           dashes: `oldschool`,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-embed-snippet`,
    //         options: {
    //           // Example code links are relative to this dir.
    //           directory: `${__dirname}/src/code-examples/`,
    //         },
    //       },
    //       `gatsby-remark-autolink-headers`,
    //       `gatsby-remark-graphviz`, // graphviz before prismjs
    //       `gatsby-remark-prismjs`,
    //       `gatsby-remark-katex`,
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: './src/content/doctors/',
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url:
    //       // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
    //       process.env.WPGRAPHQL_URL || `https://amirkhanov-clinic.ru/graphql`,
    //     // schema: {
    //     //   // Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
    //     //   typePrefix: `Wp`,
    //     // },
    //     develop: {
    //       // caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
    //       hardCacheMediaFiles: true,
    //     },
    //     debug: {
    //       timeBuildSteps: true,
    //       throwRefetchErrors: true,
    //       graphql: {
    //         showQueryOnError: true,
    //         showQueryVarsOnError: true,
    //         onlyReportCriticalErrors: true,
    //         writeQueriesToDisk: true,
    //       },
    //     },
    //     schema: {
    //       perPage: 2, // currently set to 100
    //       requestConcurrency: 1, // currently set to 15
    //       previewRequestConcurrency: 2, // currently set to 5
    //     },
    //     // type: {
    //     //   Post: {
    //     //     limit:
    //     //       process.env.NODE_ENV === `development`
    //     //         ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
    //     //           50
    //     //         : // and we don't actually need more than 5000 in production for this particular site
    //     //           70,
    //     //   },
    //     // },
    //   },
    // },
    'gatsby-plugin-sass',
  ],
};
