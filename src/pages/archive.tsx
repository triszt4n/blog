import { Box, chakra, Container, Heading } from '@chakra-ui/react'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '~components/common/layout'
import { PostsQueryProps } from './posts'

const ArchivePage: React.FC<PostsQueryProps> = ({ data }) => (
  <Layout>
    <Container>
      <Heading as="h1" my={6}>
        Archívum
      </Heading>
      {data.allMarkdownRemark.nodes.map((post) => (
        <Box key={post.fields.slug} fontSize={{ base: 'md', md: 'lg' }} py={1}>
          <span>{post.frontmatter.date} » </span>
          <Link to={post.fields.slug}>
            <chakra.span
              fontWeight="bold"
              _hover={{ textDecor: 'underline', color: 'tomato', transition: '.2s ease-in-out' }}
            >
              {post.frontmatter.title}
            </chakra.span>
          </Link>
        </Box>
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
          lead
          date
        }
      }
    }
  }
`
