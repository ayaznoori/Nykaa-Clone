import React, { useContext } from 'react'
import { Box,VStack,HStack,Text, Input,FormControl,FormLabel, Button } from '@chakra-ui/react'
import { Cartcontext } from '../contexts/Cartcontext';
import Cartitemmini from '../components/Cartitemmini';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const {cartitem }=useContext(Cartcontext);
    const navigate=useNavigate();
  return <Box paddingTop='110px' backgroundColor='rgb(243,243,243)' >
  <VStack height={'100%'} width='80%'
   backgroundColor='white'
   boxShadow='rgba(0, 0, 0, 0.35) 0px 5px  5px'
   marginTop='50px' 
   marginLeft='10%' marginBottom={20}>
  <Box >

      <HStack width={'100%'} padding={5} >
       <Box width={'45%'}  padding={'10px'} alignSelf='baseline' >    
            <FormControl>
                <FormLabel>Country</FormLabel>
                <Input type='text' />
                <FormLabel>Name</FormLabel>
                <Input type='text' />
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormLabel>Phone Number</FormLabel>
                <Input type='tel' />
                <FormLabel>Postal Code</FormLabel>
                <Input type='number' />
                <FormLabel>Address</FormLabel>
                <Input type='text' />
                <br/>
                <br/>
                <Button color='white' width={'100%'} bgColor='rgb(252,39,121)' onClick={()=>navigate('/paymentmode') }>Ship To this Address</Button>
            </FormControl>
       </Box>
          
      <Box width={'50%'} padding={5}  >
                <VStack>
                      {cartitem.length>1?cartitem.map((ele,i)=>{
                       return <Cartitemmini ele={ele} key={i}/>
                      }): <Cartitemmini ele={cartitem[0]} key={cartitem[0].id}/>} 
                    <Box border='1px solid rgb(243,243,243)' width={'100%'}  >
                      <VStack width={"100%"} padding={2}>
                       <Text fontWeight='bold'width={"100%"} > Price Detail</Text>  
                       <HStack width={"100%"} justifyContent='space-between'><Text > Bag MRP</Text> <Text> ₹{cartitem.length>1?cartitem.reduce((a,b)=>a.price+b.price):cartitem[0].price}</Text>  </HStack>
                       <HStack width={"100%"} justifyContent='space-between'><Text > Bag Discount</Text><Text><strike> ₹{cartitem.length>1?cartitem.reduce((a,b)=>(a.price-a.offprice)+(b.price-b.offprice)):cartitem[0].price-cartitem[0].offprice}</strike></Text> </HStack> 
                       <HStack width={"100%"} justifyContent='space-between'><Text > Shipping</Text> <Text>  Free</Text> </HStack>
                       <hr/>
                       <HStack width={"100%"} justifyContent='space-between' fontWeight={500}><Text  >You Pay</Text> <Text>₹{cartitem.length>1?cartitem.reduce((a,b)=>a.offprice+b.offprice):cartitem[0].offprice}</Text> </HStack>
                       </VStack>
                    </Box> 
                    </VStack>
      </Box>
      </HStack>
   </Box>
    
   </VStack>
</Box>
 
}

export default Payment