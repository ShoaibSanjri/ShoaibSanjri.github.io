import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    return ( 
      <Box id="home" bg="#282c34"   mt="0px" w="100%" h="90vh" display="flex"gap="10px" flexDirection="column" justifyContent="center" alignItems="center" >
            <Heading size="100px" >
                Hey, I am  
            </Heading>
            <Heading id="user-detail-name">Shoaib Akhtar</Heading>
            <Heading> I am a Fullstack Web Developer.</Heading>
            <Box display="flex" gap="10px">
                <Box>  <Button >  Projects <ArrowForwardIcon mt="3px" ml="3px" /></Button> </Box>
                
                <Button  >  About me <ArrowForwardIcon mt="3px" ml="3px" /></Button>
            </Box>
      </Box>
    
  )
}

export default Home
