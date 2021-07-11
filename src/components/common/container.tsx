import { Flex } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC = ({ children }) => (
  <Flex flexDirection="column" px={4} mx="auto" maxWidth={{ base: 'full', sm: '3xl', lg: '5xl' }}>
    {children}
  </Flex>
)

export default Container
