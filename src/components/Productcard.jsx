import {
  Flex,
  Circle,
  Box,
  Image,
 
  useColorModeValue,
    Text,
    HStack,
    Button,
    VStack
} from '@chakra-ui/react';
 

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

 
function ProductAddToCart() {
  return (
    <Flex   w="full" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <VStack p='6' justifyContent='center' spacing={3}  >
            <Text fontWeight={500}>Nina Ricci Ricci Ricci Eau De Parfum (80ml)</Text>
            <HStack><Text>MRP:500</Text><Text>Rs.600</Text><Text color='green'>30%off</Text></HStack>
            <HStack><Text  color='rgb(252,79,146)'>Get Free Product</Text></HStack>
            <HStack></HStack>
            <Button  _hover={{backgroundColor:'rgb(252,39,121)'}}  backgroundColor='white' width='100%' borderRadius='2' color='white'> Add To Cart</Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;