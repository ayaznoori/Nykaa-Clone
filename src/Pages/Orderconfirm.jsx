import React, { useContext, useEffect } from 'react'
import { Box, VStack, Center, Text , Button } from '@chakra-ui/react'
import { Cartcontext } from '../contexts/Cartcontext';

import { useNavigate } from 'react-router-dom';

const Orderconfirm = () => {
    const { setcartitem } = useContext(Cartcontext);
    const navigate = useNavigate();
    useEffect(() => {
        setcartitem([]);
    }, [])
    return <Box paddingTop='110px' backgroundColor='rgb(243,243,243)' >
        <VStack height={'100%'} width='80%'
            backgroundColor='white'
            boxShadow='rgba(0, 0, 0, 0.35) 0px 5px  5px'
            marginTop='50px'
            marginLeft='10%' marginBottom={20}>
            <Box justifyContent='center' padding='100px' >
                <Text textAlign='center' fontSize={30} fontWeight={600}>Order Confirmed!</Text><br />
                <Text>We are pleased to confirm your order : #NYK-456534132153135135</Text><br /><br />
                <Center><Button color='white' bgColor='rgb(252,39,121)' onClick={() => navigate('/')}>Continue Shopping</Button></Center>

            </Box>

        </VStack>
    </Box>

}

export default Orderconfirm;