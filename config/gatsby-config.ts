import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

export default {
  siteMetadata: {
    baseUrl: 'https://triszt4n.xyz',
    translations: ['en'],
    lang: 'en',
    title: 'Triszt4n',
    titleTemplate: '%s | Triszt4n',
    description: "Trisztán Piller's blog and portfolio.",
    author: 'triszt4n',
    image: '/favicon.png',
    keywords: [
      'gatsbyjs',
      'gatsby',
      'react',
      'javascript',
      'chakra-ui',
      'nodejs',
      'typescript',
      'community',
      'triszt4n'
    ],
    robots: 'index, follow'
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${path.join(__dirname, '../src/content/posts')}`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'dbposts',
        path: `${path.join(__dirname, '../src/content/dbposts')}`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${path.join(__dirname, '../src/content/works')}`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${path.join(__dirname, '../src/content/images')}`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: true,
              ordered: true,
              fromHeading: 1,
              toHeading: 6,
              className: 'md-toc'
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `md-headinglink`,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`, `h4`]
            }
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: {
                default: 'Quiet Light',
                parentSelector: {
                  'body[class=chakra-ui-dark]': 'Default Dark+'
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'md-h1',
                'heading[depth=2]': 'md-h2',
                'heading[depth=3]': 'md-h3',
                'heading[depth=4]': 'md-h4',
                'heading[depth=5]': 'md-h5',
                'heading[depth=6]': 'md-h6',
                paragraph: 'md-p',
                'list[ordered=false]': 'md-ul',
                'list[ordered=true]': 'md-ol',
                blockquote: 'md-blockquote',
                listItem: 'md-li',
                link: 'md-a',
                tableCell: 'md-td',
                thematicBreak: 'md-hr',
                table: 'md-table',
                inlineCode: 'md-code'
              }
            }
          },
          'gatsby-remark-reading-time'
        ]
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://triszt4n.xyz`
      }
    },
    'gatsby-plugin-tsconfig-paths'
  ]
}
