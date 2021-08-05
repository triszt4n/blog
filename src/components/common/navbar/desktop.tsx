import { Box, chakra, Stack, useColorModeValue } from '@chakra-ui/react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import React from 'react'
import MyLogo from '~assets/images/master.svg'
import { NAV_ITEMS } from './config'

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue('black', 'white')
  const currentLinkColor = useColorModeValue('blue.500', 'yellow.300')
  const { pathname } = useLocation()

  return (
    <Stack direction="row" spacing={10}>
      <Box my="auto">
        <MyLogo style={{ width: '32', height: '32' }} />
      </Box>
      {NAV_ITEMS.map((item) => (
        <Box key={item.label}>
          <Box
            p={1}
            display="block"
            position="relative"
            overflow="hidden"
            _hover={{
              _after: { transform: 'translate3d(0, 0, 0)', opacity: 1 }
            }}
            _after={{
              content: `''`,
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              opacity: 0,
              height: '0.2rem',
              backgroundColor: currentLinkColor,
              transform: 'translate3d(-100%, 0, 0)',
              transition: 'opacity .3s, transform .3s'
            }}
          >
            <Link to={item.path}>
              <chakra.span _hover={{ textDecor: 'none' }} color={pathname === item.path ? currentLinkColor : linkColor}>
                {item.label}
              </chakra.span>
            </Link>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
