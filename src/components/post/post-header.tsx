import { Box, Flex, HStack, Stack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaClock } from 'react-icons/fa'
import { PostProps } from '~types/post.props'

type Props = {
  post: {
    fields: {
      readingTime: {
        minutes: number
      }
    }
    frontmatter: PostProps
  }
  locale?: string
}

const PostHeader: React.FC<Props> = ({ post, locale = 'en-UK' }) => {
  const featuredImage = getImage(post.frontmatter.featuredImage)
  const readMins = Math.ceil(post.fields.readingTime.minutes)

  return (
    <Stack mb={12} mt={8} spacing={4} direction={{ base: 'column', sm: 'row' }}>
      <Box flex={1} w="full" zIndex={2}>
        {featuredImage ? (
          <GatsbyImage image={featuredImage} alt="Blog preview" objectFit="cover" />
        ) : (
          <Box rounded="base" w="full" h="full" bgGradient="linear(to-bl, teal.200, blue.400)" />
        )}
      </Box>
      <Flex flex={{ base: 0, sm: 1.5, md: 3, lg: 4 }} direction="column">
        <Flex justifyContent="space-between">
          <Box color={useColorModeValue('gray.600', 'gray.400')}>
            {new Date(post.frontmatter.date).toLocaleTimeString(locale, {
              hour: '2-digit',
              minute: '2-digit',
              year: 'numeric',
              month: useBreakpointValue({ base: 'short', md: 'long' }),
              day: 'numeric',
              weekday: useBreakpointValue({ base: 'short', md: 'long' })
            })}
          </Box>
          <Box textColor={useColorModeValue('gray.600', 'gray.400')}>
            <FaClock style={{ display: 'inline-block', marginRight: '0.25rem', marginBottom: '0.15rem' }} />
            <chakra.span>
              {readMins}&nbsp;min{readMins !== 1 ? 's' : ''}
            </chakra.span>
          </Box>
        </Flex>
        <Box mt={2} flex={1}>
          <Text fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }} fontWeight={700}>
            {post.frontmatter.title}
          </Text>
        </Box>
        <HStack justifyContent="flex-end" mt={{ base: 8, md: 4 }}>
          {post.frontmatter.tags?.map((tag) => (
            <Tag colorScheme={useColorModeValue('blue', 'yellow')} key={tag} px={2}>
              #{tag}
            </Tag>
          ))}
        </HStack>
      </Flex>
    </Stack>
  )
}

export default PostHeader
