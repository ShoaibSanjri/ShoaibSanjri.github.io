import { Box, Container, Image, Text } from "@chakra-ui/react";
import profilePicture from "../assets/profile-picture.JPG";
const AboutPage = () => {
  return (
    <Box id="about" bg="#282c34" class="about section"  display="flex" flexDirection={['column','row',"row"]} gap="20px" justifyContent="space-between"  >
      <Box  fontSize={["14px","16px","17px"]} w={["100%","70%","35%"]} display="flex" ml={[0,0,"10%"]} flexDirection="column"  justifyContent="center" alignItems="center" >
        <Text>Shoaib Akhtar</Text>
        <Text id="user-detail-intro" >
              Hello, my name is Shoaib Akhtar. I recently
              completed a full-time full-stack development course with Masai
              School, where I gained hands-on experience with various
              programming languages and frameworks. I am passionate about
              developing innovative and efficient solutions to complex problems,
              and I am excited to continue growing my skills as a developer.
        </Text>
      </Box>
      <Box w={['100%',"50%","30%"]} mr={[0,0,"10%"]} p={[0,3,3]} display="flex" justifyContent='center' alignItems="center">
        <Image class="home-img" w={['50%',"80%","80%"]} src={profilePicture} ></Image>
      </Box>
    </Box>
  );
};
// Hello, my name is Shoaib Akhtar. I recently
//               completed a full-time full-stack development course with Masai
//               School, where I gained hands-on experience with various
//               programming languages and frameworks. I am passionate about
//               developing innovative and efficient solutions to complex problems,
//               and I am excited to continue growing my skills as a developer.

export default AboutPage;
