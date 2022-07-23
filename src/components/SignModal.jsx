import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
   
    ModalBody,
    ModalCloseButton,
    Button,
 
     Box,
     useDisclosure,
    Text,
    Link,
  
  } from '@chakra-ui/react'
import Modal2 from './SignModal2';
import { useContext } from 'react';
import { Authcontext  } from '../contexts/Authcontext';
import { useEffect ,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {isAuth }=useContext(Authcontext);  
    const param=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        if(isAuth){
            navigate('/')
        }
        else
          onOpen();
    },[isAuth])
    const handleclick=()=>{
          alert('service under Maintaince. Use Mobile Login')
    }
    
 
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose} 
        >
          <ModalOverlay backgroundColor='rgb(243,243,243)'  />
       
          <ModalContent padding={6} width='370px' borderRadius={10} boxShadow='rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'  >
          <ModalCloseButton onClick={()=>navigate('/')}  />
           
           
            <ModalBody pb={6}>
            <Text fontSize={35} fontWeight={500}>Sign In</Text>
             <Text fontWeight={450}>To quickly find your favourites items, saved addresses and payments.</Text><br/>
                <hr/><br/>
             <Text>Register and earn 2000 reward points</Text>
             <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="296" height="160"><title>gift box</title>
                <g fill="none" fill-rule="evenodd"><ellipse cx="148" cy="155.5" fill="#FFF6FA" fill-rule="nonzero" rx="148" ry="4">
                    </ellipse><rect width="133" height="133" x="82" y="23" fill="#FFF6FA" fill-rule="nonzero" rx="66.5"></rect>
                    <path fill="#FF4A90" fill-rule="nonzero" d="M112 82h73v74h-73z"></path><path d="M112 82h73v74h-73z"></path>
                    <path stroke="#C50060" stroke-width="3.83" d="M148.2 155.5V82.57s-29.33-22.33-23.41-31.26c10.65-16 23.4 31.26 23.4 31.26s15.18-32.62 20.87-34.12c14.13-3.75 4.57 20.57-20.56 33.55"></path>
                    <path fill="#E80071" fill-rule="nonzero" d="M163 91h13v6h-13z"></path><path stroke="#C50060" stroke-linecap="square" stroke-width="3.5" d="M114.17 115.78h68.6"></path><circle cx="63" cy="31.71" r="7" fill="#E80071" fill-rule="nonzero"></circle><circle cx="232" cy="14.71" r="7" fill="#92E7E0" fill-rule="nonzero"></circle>
                    <path fill="#194476" fill-rule="nonzero" d="M149.92.71l7.79 7.81-7.79 7.81-7.78-7.8z"></path>
                    <g fill-rule="nonzero"><path fill="#E80071" d="M205 100v22h9v-17.34z"></path><path fill="#001325" d="M203 120h13v29.5a6.5 6.5 0 11-13 0 NaNvNaNz"></path></g><circle cx="218" cy="68.72" r="5" stroke="#001325"></circle><circle cx="12" cy="58.72" r="5" stroke="#001325"></circle>
                    <path fill="#3063A0" fill-rule="nonzero" d="M24 112h59v44H24z"></path>
                    <path stroke="#194476" stroke-width="3" d="M41.67 156v-44.03S19.9 97.32 29.4 97.32c9.5 0 12.27 10.21 12.27 10.21s6.67-15.56 12.44-13.3c5.78 2.25-18.56 24.14-18.56 24.14"></path>
                    <path stroke="#194476" stroke-linecap="square" stroke-width="3" d="M25.61 141.78H81.6"></path><path fill="#194476" fill-rule="nonzero" d="M55 120h13v6H55z"></path><g><path fill="#92E7E0" fill-rule="nonzero" d="M230 115h59v41h-59z"></path><path stroke="#59B7B7" stroke-linecap="square" stroke-width="3" d="M231.5 141.78h56.02"></path><path stroke="#59B7B7" stroke-width="3" d="M259.68 156v-43.3S237.9 98.28 247.4 98.28s12.28 10.04 12.28 10.04 6.66-15.32 12.43-13.1c5.78 2.22-18.55 23.74-18.55 23.74"></path>
                <path fill="#59B7B7" fill-rule="nonzero" d="M268 120h13v6h-13z"></path></g></g></svg>
             </Box>
             <br/>
             <Modal2 />
             
              <br/>
               <br/>
              <Button onClick={handleclick} colorScheme='facebook' variant='outline' width={'100%'} fontSize={18} >
               <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
                width={20} alt='g pic'/>&nbsp; Google
                </Button>
                <br/><br/>
                <p  > By continuing, you agree that you have read and accept our&nbsp; <Link href="#" target="_blank" title="Terms &amp; Conditions"><u>T&amp;Cs</u></Link> &nbsp;and&nbsp;
                 <Link href="#" target="_blank"  ><u>Privacy Policy</u></Link> . </p>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InitialFocus