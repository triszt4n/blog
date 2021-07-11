import { Box, Collapse, Flex, IconButton, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaGithub, FaMoon, FaTimes } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import DesktopNav from './desktop'
import MobileNav from './mobile'

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { toggleColorMode } = useColorMode()
  const modeSwitchIcon = useColorModeValue(<FiSun size="1.5rem" />, <FaMoon size="1.5rem" />)

  return (
    <Box align="center" fontFamily="heading" fontSize="2xl" fontWeight="bolder">
      <Flex h={{ base: '4rem', md: '6rem' }} px={4} py={2} maxW="6xl" align="center">
        <Flex flex={1} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes size="20px" /> : <FaBars size="20px" />}
            variant="ghost"
            aria-label="Open navigation"
          />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} flex={1} justify="start">
          <Flex display={{ base: 'none', md: 'flex' }} mx={4}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex>
          <IconButton
            as="a"
            href="https://github.com/triszt4n"
            aria-label="Open Github profile"
            icon={<FaGithub size="1.5rem" />}
            variant="ghost"
            target="_blank"
          />
          <IconButton
            aria-label="Switch dark-light mode"
            icon={modeSwitchIcon}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
        <Box width="50%" mt={2} py={0.5} rounded="full" h="1px" bgColor={useColorModeValue('gray.200', 'gray.700')} />
      </Collapse>
    </Box>
  )
}

export default Navbar
