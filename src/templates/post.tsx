import { Box, Button } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import ScrollButton from '~components/index/scroll-button'
import { PostProps } from '~types/post.props'

interface PostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: PostProps
      fields: {
        readingTime: {
          minutes: number
        }
      }
    }
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = data.markdownRemark
  const featuredImage = getImage(post.frontmatter.featuredImage)

  return (
    <Layout>
      <Container>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Box
          textAlign="right"
          mt={10}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
          <Button colorScheme="orange">Vissza a tetejére</Button>
        </Box>
      </Container>
      <ScrollButton />
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        author
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`
