import { Box } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PostPreview from '~components/post/post-preview'
import { PostProps } from '~types/post.props'

export type PostsQueryProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        fields: {
          slug: string
          readingTime: {
            minutes: number
          }
        }
        frontmatter: PostProps
      }[]
    }
  }
}

const PostsPage: React.FC<PostsQueryProps> = ({ data }) => {
  return (
    <>
      <Layout>
        <Container>
          <Box mt={{ base: 10, md: 20 }}>
            {data.allMarkdownRemark.nodes.map((post) => (
              <PostPreview key={post.fields.slug} post={post} />
            ))}
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default PostsPage

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      filter: { fields: { layout: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      nodes {
        fields {
          slug
          readingTime {
            minutes
          }
        }
        frontmatter {
          title
          lead
          date
          author
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
