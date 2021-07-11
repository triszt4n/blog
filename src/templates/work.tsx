import { Box, Button } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import ScrollButton from '~components/index/scroll-button'
import { WorkProps } from '~types/work.props'

interface ProjectTemplateProps {
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
      frontmatter: WorkProps
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  const project = data.markdownRemark.frontmatter
  const featuredImage = getImage(project.featuredImage)
  // const statusIcon = getIcon(project.status)

  return (
    <Layout>
      <Container>
        <Box py={8}>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Box>
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

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
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
        url
        status {
          label
          color
        }
        techs
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
