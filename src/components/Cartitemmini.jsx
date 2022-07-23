import React from 'react';
import { Box,Text, HStack, VStack } from '@chakra-ui/react';

const Cartitemmini = ({ele}) => {
  return (
      <Box border='1px solid rgb(243,243,243)' width='100%' padding={2}>
        <VStack alignItems='right'>
            <HStack>
                <HStack width={'30%'}>
                    <img src={ele.imgsrc1} alt="title" srcset="" />
                </HStack>
                <HStack width={'60%'}>
                    <Text>{ ele.title.substring(0,35)}...</Text>
                </HStack>
            </HStack>
            <hr/>
            <Box  textAlign='right'>
                <Text ><strike>₹{ele.price}</strike> &nbsp; <b>₹{ele.offprice}</b></Text>
            </Box>
        </VStack>

     </Box>
  )
}

export default Cartitemmini