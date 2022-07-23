import {Collapse ,Box, VStack, HStack,Text} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
export const CollapseEx=({title})=> {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
      <VStack width='100%' spacing='0' borderTopRadius='10%'>
        <Box borderBottom='2px rgb(243,243,243) solid ' width={'100%'} padding='15px'><HStack width='100%' justifyContent='space-between' onClick={onToggle}><Text>{title}</Text> <ChevronDownIcon/></HStack>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Box>
            <Text>Sample Data</Text>
            <Text>Sample Data</Text>
            <Text>Sample Data</Text>
            <Text>Sample Data</Text>
          </Box>
        </Collapse>
        </VStack>
      </>
    )
  }