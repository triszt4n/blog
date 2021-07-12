import { Box, Heading, Link as ChakraLink, Text, Tooltip, useClipboard } from '@chakra-ui/react'
import { useLocation } from '@reach/router'
import { graphql } from 'gatsby'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import PostPreview from '~components/post/post-preview'
import { PostsQueryProps } from './blog'

const DbPage: React.FC<PostsQueryProps> = ({ data }) => {
  const { href } = useLocation()
  const { onCopy, hasCopied } = useClipboard(href)
  return (
    <Layout>
      <SEO title="Adatb" />
      <Container>
        <Box my={6}>
          <Heading fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}>Gyakorlat posztok</Heading>
          <Text mt={4} fontSize={{ base: 'md', sm: 'lg' }}>
            Ez az oldal az Adatbázisok VITMAB04 tárgy általam vezett gyakorlatának segédleteit gyűjti össze posztok
            formájában. Csupán a{' '}
            <Tooltip hasArrow closeOnClick closeDelay={500} label={hasCopied ? 'Másolva!' : 'Kattints a másoláshoz'}>
              <ChakraLink onClick={onCopy}>{href}</ChakraLink>
            </Tooltip>{' '}
            elérési útvonalon érhető el, navigáció elől rejtett.
          </Text>
        </Box>
        <Box mt={4}>
          {data.allMarkdownRemark.nodes.map((post) => (
            <PostPreview key={post.fields.slug} post={post} />
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

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
