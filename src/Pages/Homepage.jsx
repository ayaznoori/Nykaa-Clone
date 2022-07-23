import React from 'react'
import {Box, Center,Grid,GridItem,Text, VStack} from '@chakra-ui/react'
import {Carousel} from '../components/Carousel';
 import {useNavigate} from 'react-router-dom';
const Homepage = () => {
 const navigate=useNavigate();
 const handlenav=()=>{
      navigate('/products')
 }
  return (
    <Box>
        <Box paddingTop={'115px'}></Box>
       <Carousel/>
       <Center  padding='20px'>
        <VStack>
        <Box onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}>
        <img src="https://images-static.nykaa.com/uploads/19367bb9-be89-428e-8892-e6f1ad9718f2.jpg?tr=w-1200,cm-pad_resize" alt="offer" srcset="" />
        </Box><br/>
        <Text fontSize='30px'>HOT PINK SALE - COMING SOON!</Text>
        <Box onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}>
        <img src="https://images-static.nykaa.com/uploads/6d0da889-5aed-49ed-b6c1-ec3105226618.gif?tr=w-1200,cm-pad_resize" alt="offer" srcset="" />
        </Box><br/>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/046de71f-4797-44bc-b7d2-1c198e65d050.png?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/57c0cdd9-3cbc-470e-a47b-c08ee7ca0144.png?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
        </Grid>
        <Text fontSize='30px'>TOP BRANDS</Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/3856736f-82d6-45c0-a10e-8bc90e891bb2.gif?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/45e77657-2fba-49f1-b077-437dc02b978c.gif?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/1555b61a-a163-408a-ab3d-3a666832acfb.jpg?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/b1189a45-6537-415f-ae55-bdd500d074b0.gif?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem  onClick={handlenav} _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/2aaabbf7-64bb-4ec8-b73c-671074554789.jpg?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
          <GridItem onClick={handlenav}  _hover={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}}> <img src="https://images-static.nykaa.com/uploads/83247895-0a7e-4141-9b86-ce7b039e7c3a.gif?tr=w-600,cm-pad_resize" alt="offer" srcset="" /></GridItem>
        </Grid>
        </VStack>
        
       </Center>
    </Box>
  )
}

export default Homepage