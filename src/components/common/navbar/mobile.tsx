import { Box, Stack, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import { NAV_ITEMS } from './config'

const MobileNav: React.FC = () => {
  return (
    <Stack display={{ md: 'none' }}>
      {NAV_ITEMS.map((item) => (
        <Box key={item.label} as={Link} to={item.path}>
          <Text textAlign="center">{item.label}</Text>
        </Box>
      ))}
    </Stack>
  )
}

export default MobileNav
