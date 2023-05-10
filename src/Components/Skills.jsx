import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
      id="skills"
      display={"flex"}
      flexDirection={"column"}
      gap="30px"
      mt="30px"
      justifyContent={"center"}
      alignItems={"center"}
      ml={"120px"}
    >
      <Heading> Skills</Heading>
      <Grid templateColumns="repeat(4, 120px)" gap={4} w="50%">
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=9nmz9TYzN8iO&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">HTML</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=38272&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">CSS</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=106036&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">Javascript</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=viH7JJy51bHj&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">reactJS</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=54087&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">Nodejs</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=kg46nzoJrmTR&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">Express JS</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=74402&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">MongoDB</Text>
        </Box>
        <Box
          class="skills-card"
          p="4"
          border="1px red solid"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            class="skills-card-img"
            src="https://img.icons8.com/?size=1x&id=EPbEfEa7o8CB&format=png"
            w="50%"
          ></Image>
          <Text class="skills-card-name">Postman</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Skills;
