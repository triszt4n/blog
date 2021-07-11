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

export const useUtterances = (commentNodeId: string): void => {
  React.useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId)
    if (!scriptParentNode) return undefined

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', 'triszt4n/blog')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'comment')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')

    scriptParentNode.appendChild(script)
    return () => {
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node)
    }
  }, [commentNodeId])
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = data.markdownRemark
  const featuredImage = getImage(post.frontmatter.featuredImage)
  useUtterances('comments')

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
          <Button colorScheme="orange">Scroll up</Button>
        </Box>
        {post.frontmatter.comment && (
          <>
            <Box id="comments" />
            <Box
              textAlign="right"
              mt={2}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}
            >
              <Button colorScheme="orange">Scroll up</Button>
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
      }
    }
  }
`
