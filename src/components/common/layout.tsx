import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import SEO from './seo'

type Props = {
  background?: string
}

const Layout: React.FC<Props> = ({ background, children }) => {
  return (
    <>
      <SEO />
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Box background={background} flex={1} pb={24}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
