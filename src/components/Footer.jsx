import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box margin={0}  borderBottom='lightblue'>
         <VStack>
            <HStack backgroundColor='rgb(63,65,77)' color='white' width='100%'>
                <Box>Get special discount on your inbox
                    Your Email
                    SEND</Box>
                <Box></Box>
                <Box></Box>
            </HStack>
        </VStack>
    </Box>
  )
}

export default Footer