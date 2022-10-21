import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import "../App.css";
export const Navbar = () => {
  const [display,setDisplay]=useState(false)
  const style={
    display:"none"
  }
  return (
    <>
      <Box className="menuicon">
        <HamburgerIcon />
      </Box>
      <Box className="sidebar">
        <Box
          color={"#e7e6ff"}
          fontFamily={"initial"}
          p={"60px"}
          bg={"#18172e"}
          fontSize="46px"
        >
          Janhavi
        </Box>
        <Box bg={"#18172e"} className="middlebar" mt={10}>
          <Box className="list" p={1}>
            Home
          </Box>
          <Box className="list">About</Box>
          <Box className="list">Skills</Box>
          <Box className="list">Project</Box>
          <Box className="list">Contact</Box>
        </Box>
        <Flex
          color={"#e7e6ff"}
          p={"52px"}
          gap={10}
          mt={70}
          bg={"#18172e"}
          textAlign={"center"}
        >
          <Box bg={"#18172e"}>Linkedin</Box>
          <Box bg={"#18172e"}>Github</Box>
          <Box bg={"#18172e"}>Twitter</Box>
        </Flex>
      </Box>
    </>
  );
};
