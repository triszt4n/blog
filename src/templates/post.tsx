import { Box, Button } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Utterances } from 'utterances-react-component'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import ScrollButton from '~components/index/scroll-button'
import PostHeader from '~components/post/post-header'
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
        layout: string
      }
    }
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Container>
        <PostHeader
          post={{ fields: post.fields, frontmatter: post.frontmatter }}
          locale={post.fields.layout === 'db' ? 'hu-HU' : 'en-UK'}
        />
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
          <Button colorScheme="orange">Scroll up</Button>
        </Box>
        {post.frontmatter.comment && (
          <>
            <Utterances repo="triszt4n/blog" theme="github-light" issueTerm="pathname" label="comment" />
            <Box textAlign="right" mt={2}>
              <Button
                colorScheme="orange"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }}
              >
                Scroll up
              </Button>
            </Box>
          </>
        )}
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
      frontmatter {
        title
        date
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        comment
      }
      fields {
        readingTime {
          minutes
        }
        layout
      }
    }
  }
`
