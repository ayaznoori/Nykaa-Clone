import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
     Box,
     useDisclosure,
    Text,
    Link,
    HStack,
  
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {Authcontext} from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom';
function OtpModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [otp,setotp]=useState("");
    let temp= JSON.parse(localStorage.getItem("userdata"));
    const navigate=useNavigate();
    const {isAuth,setisAuth}=useContext(Authcontext); 
    const handleclick=()=>{
          if(otp!="1234"){
            alert("Incorrect Otp")
          }
          else{
              setisAuth(true);
              navigate('/')
          }
 
    }
   
    return (
      <>
        <Button bgColor='rgb(252,39,121)' onClick={onOpen} isLoading={false} _hover={{bgcolor:"rgb(252,39,118)"}} color='white' fontSize={18} width='100%'> PROCEED </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <ModalOverlay backgroundColor='rgb(243,243,243)' />
       
          <ModalContent textAlign={'center'} padding={6} width='370px' borderRadius={10} boxShadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'  >
          <HStack><Text fontSize={18} fontWeight={500} textAlign='right'>REGISTER </Text><ModalCloseButton /> </HStack>
          <hr/>
           <Text>Welcome to Nykaa!</Text><br/><br/>
           <Text>Register Now and get <span style={{color:'rgb(252,39,118)'}}>2000 Rewards Points</span></Text> 
           <br/>
           
            <ModalBody pb={6}>
            <Button bgColor={"rgb(243,243,243)"}  width='100%'  borderRadius={1} borderColor='rgb(252,39,121)' >{temp.number}</Button>
              
             <br/><br/>
              <Text>Please Enter the OTP sent to verify your mobile/email</Text><br/><br/>
              <Input variant='filled' placeholder='OTP' width='70%' type='Number' onChange={(e)=>setotp(e.target.value)}/>
              <br/><br/>
             <Button bgColor='rgb(252,39,121)' disabled={otp==""?true:false} isLoading={false} onClick={handleclick} _hover={{bgcolor:"rgb(252,39,118)"}} color='white' fontSize={18} width='100%'> PROCEED </Button>
            </ModalBody>
                
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default OtpModal