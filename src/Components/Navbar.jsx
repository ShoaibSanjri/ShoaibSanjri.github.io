import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNav);
  }

  return (
      <Box
          position="sticky"
          id="nav-menu"
          
      top="0px"
      left="0"
      w="100%"
      bg={scrollNav ? "#282c34" : "blue"}
      boxShadow={scrollNav ? "lg" : "none"}
      zIndex="9999"
    >
      <Flex  
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        maxW="7xl"
        mx="auto"
      >
        <Box>
          <Box>Logo</Box>
        </Box>
        <IconButton
          icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={() => setShowMenu(!showMenu)}
          variant="outline"
          aria-label="Open menu"
              />
              <Box display={{ base: "none", md: "flex" }}>
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
          />
        </Box>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          display={{ base: showMenu ? "flex" : "none", md: "flex" }}
        >
                  <Box>
                  <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link home"
            >
              Home
            </Link>
          </Box>
                  <Box>
                  <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link about"
            >
              About
            </Link>
          </Box>
                  <Box>
                  <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link skills"
            >
              Skills
            </Link>
          </Box>
                  <Box>
                  <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link projects"
            >
              Projects
            </Link>
          </Box>
                  <Box>
                  <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link contact"
            >
              Contact
            </Link>
                  </Box>
                  <a href="" className="nav-link resume">
              Resume
            </a>
              </Stack>
              
      </Flex>
    </Box>
  );
};

export default Navbar;
