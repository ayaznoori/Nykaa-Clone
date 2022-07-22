import { Box, Grid, GridItem, HStack,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CollapseEx } from '../components/CollapseEx'
import ProductAddToCart from '../components/Productcard'

const Products = () => {
  return (
    <Box paddingTop='150px' backgroundColor={'rgb(243,243,243)'}>
    <Grid templateColumns='25% 70%' padding={'50px'} justifyContent='space-between' alignItems='top'>
        <HStack   textAlign={'right'} backgroundColor={'white'} >
            <VStack spacing='0' width='100%' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' fontWeight={500} >
            <CollapseEx  title='Category' />
            <CollapseEx  title='Price' />
            <CollapseEx  title='Avg Customer Rating' />
            <CollapseEx  title='Preference' />
            <CollapseEx  title='Concern' />
            <CollapseEx  title='Skin Type' />
            <CollapseEx  title='Conscious' />
            <CollapseEx  title='Formulation' />
            <CollapseEx  title='Gender' />
            <CollapseEx  title='Hair Type' />
            <CollapseEx  title='Ingredient' />
            </VStack>
        </HStack>
        <HStack height='600px' overflow='scroll' alignItems='top'  __css={{'&::-webkit-scrollbar':{display:'none'}}} >
            <Grid templateColumns={'1fr 1fr 1fr'} gap='20px'>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            <GridItem><ProductAddToCart/></GridItem>
            </Grid>
        
        </HStack>
    </Grid>
    </Box>
  )
}

export default Products