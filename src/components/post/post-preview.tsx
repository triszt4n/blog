import { Box, Flex, HStack, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaClock } from 'react-icons/fa'
import { PostProps } from '~types/post.props'

type Props = {
  post: {
    fields: {
      slug: string
      readingTime: {
        minutes: number
      }
    }
    frontmatter: PostProps
  }
  isFirst?: boolean
}

const PostPreview: React.FC<Props> = ({ post, isFirst }) => {
  const featuredImage = getImage(post.frontmatter.featuredImage)
  const isMobile = useBreakpointValue({ base: true, sm: false })

  return (
    <Box mb={isFirst && !isMobile ? 6 : 1}>
      <Stack spacing={4} direction={{ base: 'column', sm: 'row' }}>
        <Flex flex={1} position="relative" mr={{ base: 0, sm: 2 }} pb={{ base: 2, sm: 0 }}>
          <Box w="full" zIndex={2}>
            <Link to={post.fields.slug}>
              {featuredImage ? (
                <GatsbyImage image={featuredImage} alt="Blog preview" objectFit="cover" />
              ) : (
                <Box rounded="base" w="full" h="full" bgGradient="linear(to-bl, teal.200, blue.400)" />
              )}
            </Link>
          </Box>
        </Flex>
        <Flex direction="column" flex={isFirst ? 1.5 : 2.5}>
          <Flex direction={{ base: 'column', sm: 'row' }} justifyContent="space-between">
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              {new Date(post.frontmatter.date).toLocaleTimeString('hu-HU', {
                hour: '2-digit',
                minute: '2-digit',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
              })}
            </Text>
          </Flex>
          <Box mt={2} flex={1}>
            <Text as={Link} to={post.fields.slug} fontSize={isFirst && !isMobile ? '3xl' : '2xl'} fontWeight={700}>
              {post.frontmatter.title}
            </Text>
            <Box mt={2} textColor={useColorModeValue('gray.600', 'gray.400')}>
              <FaClock style={{ display: 'inline-block', marginRight: '0.25rem', marginBottom: '0.15rem' }} />
              <chakra.span>{Math.ceil(post.fields.readingTime.minutes)}&nbsp;perc</chakra.span>
              {post.frontmatter.lead && (
                <>
                  <chakra.span mx={2}>•</chakra.span>
                  <chakra.span>{post.frontmatter.lead}</chakra.span>
                </>
              )}
            </Box>
          </Box>
          <HStack justifyContent="flex-end" mt={4}>
            {post.frontmatter.tags?.map((tag) => (
              <Tag colorScheme={useColorModeValue('blue', 'yellow')} key={tag} px={2}>
                #{tag}
              </Tag>
            ))}
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default PostPreview
