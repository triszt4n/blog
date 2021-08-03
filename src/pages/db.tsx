import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import PostPreview from '~components/post/post-preview'
import { PostsQueryProps } from './blog'

const DbPage: React.FC<PostsQueryProps> = ({ data }) => (
  <Layout>
    <SEO title="Adatb" />
    <Container>
      <Box my={6}>
        <Heading fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}>Gyakorlat posztok</Heading>
        <Text mt={4} fontSize={{ base: 'md', sm: 'lg' }}>
          Ez az oldal az Adatbázisok VITMAB04 tárgy általam vezett gyakorlatának segédleteit gyűjti össze posztok
          formájában. A fenti <FaDatabase style={{ display: 'inline-block' }} /> gomb által juthattok erre az oldalra.
        </Text>
      </Box>
      <Stack mt={4} spacing={{ base: 16, sm: 12 }} direction="column">
        {data.allMarkdownRemark.nodes.map((post) => (
          <PostPreview key={post.fields.slug} post={post} />
        ))}
      </Stack>
    </Container>
  </Layout>
)

export default DbPage

export const query = graphql`
  query DbPosts {
    allMarkdownRemark(
      filter: { fields: { layout: { eq: "dbpost" } } }
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 6
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
