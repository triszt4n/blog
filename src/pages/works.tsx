import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import PuzzleAnimation from '~components/index/puzzle-animation'

const WorksPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <Container>
        <PuzzleAnimation text="This page is under construction!" />
      </Container>
    </Layout>
  )
}

export default WorksPage
