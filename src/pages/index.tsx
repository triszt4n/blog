import { Box, Heading } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import PuzzleAnimation from '~components/index/puzzle-animation'
import { PostsQueryProps } from './posts'

const IndexPage: React.FC<PostsQueryProps> = ({ data }) => (
  <>
    <Layout>
      <Container>
        <Box my={6}>
          <Heading fontSize={{ base: '4xl', sm: '5xl', md: '5xl', lg: '6xl' }}>Hi, I'm Trisztán</Heading>
          <Box my={3} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }} lineHeight="none">
            I'm a software engineering student, and I like to build web services with the latest technologies.
          </Box>
        </Box>
        <PuzzleAnimation text="This page is under construction!" />
      </Container>
    </Layout>
  </>
)

export default IndexPage

export const query = graphql`
  query IndexPosts {
    allMarkdownRemark(
      filter: { fields: { layout: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
