import { StarIcon } from '@chakra-ui/icons';
import { Box, Button, HStack,Input,Text, VStack } from '@chakra-ui/react';
import React, { useState,useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Sampledata } from '../sampledata/Sampledata';
import { Cartcontext } from '../contexts/Cartcontext';
import { Authcontext } from '../contexts/Authcontext';
const Product = () => {
    let data=Sampledata().items;
    const param=useParams();
    let sdata=data[param.id];
    const navigate=useNavigate();
    let [curimg,setcurimg]=useState(sdata.imgsrc2);
    const {cartitem,setcartitem}=useContext(Cartcontext);
    const {isAuth }=useContext(Authcontext)
    const handleclick=(sdata)=>{
        if(isAuth){
          setcartitem([...cartitem,sdata]);
          alert('item Added Successfully')
        }
        else{
              navigate('/login')
        }
    }
   
  return ( 
    <Box paddingTop='110px' backgroundColor='rgb(243,243,243)' >
        <VStack height={'100%'} width='80%'
        backgroundColor='white'
         boxShadow='rgba(0, 0, 0, 0.35) 0px 5px  5px'
          
         marginTop='50px' 
         marginLeft='10%' marginBottom={20}>
        <Box >
    
            <HStack width={'100%'} >
             <VStack width={'45%'} borderRight='2px solid rgb(243,243,243)' padding={'10px'} >    
                <HStack alignContent='left'>
                    <VStack justifyItems='left' spacing={2}>
                        <Box onMouseOver={()=>setcurimg(sdata.imgsrc1)} _hover={{border:'3px solid black'}} border='3px solid rgb(243,243,243)'><img src={sdata.imgsrc1} alt="hello" srcset="" width={'110px'} /></Box>
                        <Box onMouseOver={()=>setcurimg(sdata.imgsrc2)} _hover={{border:'3px solid black'}} border='3px solid rgb(243,243,243)'><img src={sdata.imgsrc2} alt="hello" srcset="" width={'110px'} /></Box>
                        <Box onMouseOver={()=>setcurimg(sdata.imgsrc3)} _hover={{border:'3px solid black'}} border='3px solid rgb(243,243,243)'><img src={sdata.imgsrc3} alt="hello" srcset="" width={'110px'} /></Box>
                     </VStack>
                     <VStack>
                             <img src={curimg} alt="hello" srcset="" width={'80%'} />
                     </VStack>
                </HStack>
                 
             </VStack>
                
            <Box width={'50%'} height={'300px'}>
                <Box><Text fontWeight={500} fontSize={20}>{sdata.title}</Text></Box><br></br>
                <Box><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>  4.6/5 | 107 ratings & 42 reviews | Q&As</Box><br></br>
                <HStack fontSize={20}><Text>MRP:&nbsp; <strike>₹{sdata.price}</strike></Text><Text fontWeight={500}>₹{sdata.offprice}</Text><Text color='green'>{sdata.off}off</Text></HStack><br></br>
                <HStack  width='100%' spacing={10}>
                    <Box width={'40%'}><Button  onClick={()=>handleclick(sdata)}  backgroundColor='rgb(252,39,121)' width={'100%'} borderRadius='2' color='white'> Add To Bag</Button></Box>
                    <HStack width={'40%'} spacing={0}> <Input placeholder='Enter Pincode'/><Button textColor={'rgb(252,39,121)'}>Check</Button>
                     </HStack>
                </HStack>
            </Box>
            </HStack>
         </Box>
         <Box alignContent='left'>
            <Text> Description Goes Here</Text>
         </Box>
         </VStack>
    </Box>
  )
}

export default Product