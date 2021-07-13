import { Box, Button, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
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

const PostsPage: React.FC<PostsQueryProps> = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
      <Box mt={8} mb={16}>
        <Heading fontSize={{ base: '4xl', sm: '5xl', md: '5xl', lg: '6xl' }}>Blog</Heading>
        <Box mt={3} fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} lineHeight="none">
          Latest news about my studies, career and tech explorations.
        </Box>
      </Box>
      <Stack spacing={{ base: 16, sm: 12 }} direction="column">
        {data.allMarkdownRemark.nodes.map((post, index) => (
          <PostPreview key={post.fields.slug} post={post} isFirst={index === 0} />
        ))}
      </Stack>
      <Flex justifyContent="flex-end" mt={12}>
        <Button colorScheme={useColorModeValue('blue', 'yellow')} as={Link} to="/archive">
          More posts...
        </Button>
      </Flex>
    </Container>
  </Layout>
)

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
