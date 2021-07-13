// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = {
  fonts: {
    heading: 'Ubuntu, sans-serif',
    body: 'Ubuntu, sans-serif'
  },
  components: {
    Link: {
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? 'blue.500' : 'yellow.300',
        transition: 'all .5s ease',
        fontWeight: 500,
        _hover: {
          textDecoration: 'underline',
          color: props.colorMode === 'light' ? 'blue.700' : 'yellow.500'
        }
      })
    }
  }
}

export default extendTheme(theme)
