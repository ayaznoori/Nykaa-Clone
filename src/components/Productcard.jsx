import {
  Flex,
 
  Box,
  Image,
 
  useColorModeValue,
    Text,
    HStack,
    Button,
    VStack
} from '@chakra-ui/react';
import { useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../contexts/Authcontext';
import { Cartcontext } from '../contexts/Cartcontext';
  
function ProductAddToCart({ele}) {
  const navigate=useNavigate();
  const {cartitem,setcartitem}=useContext(Cartcontext);
  const {isAuth }=useContext(Authcontext)
  const handleclick=({title,id})=>{
     navigate(`/product/${title}/${id-1}`)
   }
   const handlecart=()=>{
    if(isAuth){
      setcartitem([...cartitem,ele]);
      alert('Item Added Successfully')
    }
    else{
      navigate('/login',{param:'hellp'})
    }
   
   }
   
  return (
    <Flex   w="full" _hover={{cursor:"pointer",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <Box  
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image  onClick={()=>handleclick(ele)}
          src={ele.imgsrc1}
          alt={`Picture of ${ele.id}`}
          roundedTop="lg"
        />

        <VStack p='6' justifyContent='center' spacing={3}   onClick={()=>handleclick(ele)} >
            <Text fontWeight={500}>{(ele.title).substring(0,40) }...</Text>
            <HStack><Text>MRP:&nbsp; <strike>₹{ele.price}</strike></Text><Text>₹{ele.offprice}</Text><Text color='green'>30%off</Text></HStack>
            <HStack><Text  color='rgb(252,79,146)'>Get Free Product</Text></HStack>
             
        </VStack>
        <Button onClick={handlecart}  _hover={{backgroundColor:'rgb(252,39,121)'}}  backgroundColor='white' width='100%' borderRadius='2' color='white'> Add To Bag</Button>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;