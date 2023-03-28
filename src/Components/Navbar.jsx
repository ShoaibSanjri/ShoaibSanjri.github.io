import { Box, Button, Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
    // console.log(ThemeContext)
    const [colorMode, setColorMode] = useState("light");
  return (
    <Box>
      <Flex
        bg={colorMode === "light" ? "black" : "grey"}
        border="1px red solid"
        padding="10px"
        as="nav"
       
        align="center"
        justify="space-between"
        wrap="wrap"
        
        id="nav-menu"
      >
        <Heading as="h1" color="white" size="lg" fontFamily={"sans-serif"} >
          Shoaib Akhtar
        </Heading>
        <Box
          onClick={() =>
            colorMode === "light" ? setColorMode("dark") : setColorMode("light")
          }
        >
          {colorMode === "light" ? (
            <IconButton aria-label="Toggle Dark Mode" icon={<FaMoon />} />
          ) : (
            <IconButton aria-label="Toggle Light Mode" icon={<FaSun />} />
          )}
        </Box>
        <Box >
          <Button mr={10} size="md" borderRadius="15%" className="nav-link home">
            Home
          </Button>
          <Button mr={10} className="nav-link about">
            About
          </Button>
          <Button mr={10} className="nav-link skills">
            Skills
          </Button>
          <Button mr={10} className="nav-link projects">
            Projects
          </Button>
          <Button mr={10} className="nav-link contact">
            Contact
          </Button>
          <Button mr={10} className="nav-link resume">
            Resume
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
