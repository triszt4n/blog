import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import PuzzleAnimation from '~components/index/puzzle-animation'

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <PuzzleAnimation text="This page is under construction!" />
    </Container>
  </Layout>
)

export default AboutPage
