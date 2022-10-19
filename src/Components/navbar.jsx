import { Box, Container, Flex, Text } from "@chakra-ui/react"
import "../App.css"
export const Navbar=()=>{
  return (
    <>
      <Box className="sidebar">
        <Box fontFamily={"initial"} p={"60px"} bg={"#1A365D"} fontSize="46px">
          Janhavi
        </Box>
        <Box className="middlebar" mt={10}>
          <Box className="list" >
            Home
          </Box>
          <Box className="list" >
            About
          </Box>
          <Box className="list">
            Skills
          </Box>
          <Box className="list" >
            Project
          </Box>
          <Box className="list" p={4}>
            Contact
          </Box>
        </Box>
        <Flex p={"52px"} gap={10} mt={70} bg={"#1A365D"} textAlign={"center"}>
          <Box bg={"#1A365D"}>Linkedin</Box>
          <Box bg={"#1A365D"}>Github</Box>
          <Box bg={"#1A365D"}>Twitter</Box>
        </Flex>
      </Box>
    </>
  );
}