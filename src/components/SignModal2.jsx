import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
 
    ModalFooter,
    ModalBody,
    ModalCloseButton,
 
    Input,
 
     useDisclosure,
    Text,
 
    HStack,
  
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import OtpModal from './OtpModal';
function Modal2() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setdata]=useState({number:"",name:""}); 
    useEffect(()=>{
            localStorage.setItem("userdata",JSON.stringify(data))
    },[data])
    return (
      <>
  
        <Input onClick={onOpen} _hover={{cursor:"pointer"}} variant='filled'  placeholder='Enter Phone Number or Email'  bgColor={'rgb(252,39,121)'} _placeholder={{color:'white',fontSize:'17px',fontWeight:'500'}}/>
       
        <Modal
          isOpen={isOpen}
          onClose={onClose}
       
        >
          <ModalOverlay backgroundColor='rgb(243,243,243)' />
       
          <ModalContent padding={6} width='370px' borderRadius={10} boxShadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'  >
          <HStack><Text fontSize={18} fontWeight={500}> Login / Register </Text><ModalCloseButton /> </HStack>
           
           
            <ModalBody pb={6}>
            <Input   variant='filled'  borderRadius={1} borderColor='rgb(252,39,121)' onChange={(e)=>setdata({...data,number:e.target.value})} placeholder='Enter Phone Number or Email'   />
             <Text textAlign='right'>   Enter Correct Email Id / Mobile Number </Text>
             <br/><br/>
             <Input   variant='filled'  borderRadius={1} borderColor='rgb(252,39,121)' onChange={(e)=>setdata({...data,name:e.target.value})} placeholder='Enter Your Name'/>
             <br/><br/><br/>
             <OtpModal/>
             
            </ModalBody>
                
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Modal2