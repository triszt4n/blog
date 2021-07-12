import { Box, Container, Flex, IconButton, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FACEBOOK_URL, GITHUB_URL, GITREPO_URL, LINKEDIN_URL, PUBLIC_EMAIL } from '~utils/configurations'
import { NAV_ITEMS } from './navbar/config'

const Footer: React.FC = () => (
  <Box as="footer">
    <Container py={8} as={Flex} justifyContent="space-between" direction={{ base: 'column', sm: 'row' }} maxW="6xl">
      <Flex mb={{ base: 4, sm: 0 }} justifyContent={{ base: 'center', sm: 'flex-start' }}>
        <Flex rounded="full" overflow="hidden" h="3.25rem" w="3.25rem" mr={4} mt={2} alignItems="center">
          <StaticImage src="../../assets/images/github.jpg" placeholder="blurred" alt="Me" />
        </Flex>
        <Flex direction="column">
          <Text fontSize="xl" fontWeight={500}>
            triszt4n's site.
          </Text>
          <Stack direction="row" spacing={{ base: 2, sm: 3, md: 4 }}>
            {NAV_ITEMS.map((item) => (
              <ChakraLink key={item.path} as={GatsbyLink} to={item.path}>
                {item.label}
              </ChakraLink>
            ))}
          </Stack>
          <Text mt={1} fontSize="sm">
            Source available on{' '}
            <ChakraLink target="_blank" href={GITREPO_URL}>
              GitHub
            </ChakraLink>
            .
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" justifyContent={{ base: 'center', sm: 'flex-end' }}>
        <Stack spacing={{ base: 1, sm: -0.5 }} direction="row" justifyContent={{ base: 'center', sm: 'flex-end' }}>
          <IconButton
            as="a"
            href={`mailto:${PUBLIC_EMAIL}`}
            aria-label="Write an email to me"
            icon={<FaEnvelope size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href={FACEBOOK_URL}
            target="_blank"
            aria-label="Open Facebook profile"
            icon={<FaFacebook size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href={GITHUB_URL}
            target="_blank"
            aria-label="Open Github profile"
            icon={<FaGithub size="1.5rem" />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href={LINKEDIN_URL}
            target="_blank"
            aria-label="Open LinkedIn profile"
            icon={<FaLinkedin size="1.5rem" />}
            variant="ghost"
          />
        </Stack>
        <Text mt={2} textAlign={{ base: 'center', sm: 'right' }}>
          &copy; {new Date().getFullYear()} • Trisztán Piller
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default Footer
