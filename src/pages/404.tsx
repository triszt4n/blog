import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { navigate } from '@reach/router'
import React from 'react'
import Container from '~components/common/container'
import Layout from '~components/common/layout'
import SEO from '~components/common/seo'
import PuzzleAnimation from '~components/index/puzzle-animation'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404" robots="noindex, nofollow" />
    <Container>
      <PuzzleAnimation text="Page not found!" />
      <Flex justifyContent="center" mt={12}>
        <Button onClick={() => navigate(-1)} colorScheme={useColorModeValue('blue', 'yellow')}>
          Go back
        </Button>
      </Flex>
    </Container>
  </Layout>
)

export default NotFoundPage
