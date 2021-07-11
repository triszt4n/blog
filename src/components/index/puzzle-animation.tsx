import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { PuzzleIcon1, PuzzleIcon2, PuzzleIcon3, PuzzleIcon4 } from '../svgs/PuzzleIcons'

type Props = {
  text?: string
}

const PuzzleAnimation: React.FC<Props> = ({ text }) => {
  const transition = {
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1
  }
  const animation = {
    opacity: [1, 0, 1]
  }

  return (
    <Flex mt={8} alignItems="center" direction="column">
      {text && (
        <HStack flexDirection={{ base: 'column', sm: 'row' }} textAlign="center" mt={2} fontSize="2xl" fontWeight={600}>
          <FaExclamationTriangle />
          <Text>{text}</Text>
        </HStack>
      )}
      <Box>
        <Flex>
          <motion.div animate={animation} transition={{ ...transition, duration: 2 + Math.random() * 3 }}>
            <PuzzleIcon1 color="blue.400" w="8rem" h="8rem" />
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 3 }}
          >
            <PuzzleIcon2 color="cyan.400" ml="-3.75rem" w="8rem" h="8rem" />
          </motion.div>
        </Flex>
        <Flex>
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
          >
            <PuzzleIcon3 color="green.400" mt="-3.75rem" w="8rem" h="8rem" />
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ ...transition, duration: 2 + Math.random() * 3, delay: Math.random() * 4 }}
          >
            <PuzzleIcon4 color="teal.300" ml="-3.6rem" mt="-3.75rem" w="8rem" h="8rem" />
          </motion.div>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PuzzleAnimation
