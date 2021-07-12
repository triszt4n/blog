import { Box, Flex, Heading, HStack, Link as ChakraLink, Tag } from '@chakra-ui/react'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import { PostsQueryProps } from './blog'

const ArchivePage: React.FC<PostsQueryProps> = ({ data }) => (
  <Layout>
    <SEO title="Archive" />
    <Container>
      <Box my={6}>
        <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>Archive</Heading>
      </Box>
      {data.allMarkdownRemark.nodes.map((post) => (
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          key={post.fields.slug}
          py={{ base: 6, sm: 2 }}
          fontSize={{ base: 'md', sm: 'lg' }}
          justifyContent="space-between"
        >
          <Flex>
            <Box>{new Date(post.frontmatter.date).toLocaleDateString('hu-HU')}</Box>
            <Box px={2}>»</Box>
            <ChakraLink flex={1} as={Link} to={post.fields.slug}>
              {post.frontmatter.title}
            </ChakraLink>
          </Flex>
          <HStack fontSize={{ base: 'sm', sm: 'md' }} justifyContent="flex-end">
            {post.frontmatter.tags?.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </HStack>
        </Flex>
      ))}
    </Container>
  </Layout>
)

export default ArchivePage

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { layout: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`
