// import './App.css';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useContext } from "react";
// import { color } from "framer-motion";
import { useState } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Components/Navbar";
import UserContext from "./Context/userContext";

function App() {
  const theme = useContext(UserContext)

  return (
    <Box bg="black" border="1px red solid" >
      {/* Navbar */}
      <Navbar />

      {/* Home section */}
      <Flex
        id="home"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg={theme === "light" ? "white" : "gray.800"}
      >
        <Box textAlign="center">
          <Image src="your-image-url" className="home-img" />
          <Heading as="h1" size="2xl" mb={4} mt={8}>
            Hi, I'm [Your Name]
          </Heading>
          <Text fontSize="xl" mb={4} id="user-detail-intro">
            [Your formal introduction]
          </Text>
          <Flex justifyContent="center">
            <Link
              href="https://github.com/[Your GitHub username]"
              isExternal
              mr={4}
              id="contact-github"
            >
              <IconButton aria-label="GitHub Profile" icon={<FaGithub />} />
            </Link>
            <Link
              href="https://linkedin.com/in/[Your LinkedIn username]"
              isExternal
              mr={4}
              id="contact-linkedin"
            >
              <IconButton aria-label="LinkedIn Profile" icon={<FaLinkedin />} />
            </Link>
            <Text mr={4} id="contact-phone">
              [Your phone number]
            </Text>
            <Text id="contact-email">[Your email address]</Text>
          </Flex>
          <Flex justifyContent="center" mt={8}>
            <Link href="your-resume-pdf-url" isExternal id="resume-link-1">
              <Button mr={4} id="resume-button-1">
                View Resume
              </Button>
            </Link>
            <Link href="your-resume-pdf-url" download id="resume-link-2">
              <Button id="resume-button-2">Download Resume</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
