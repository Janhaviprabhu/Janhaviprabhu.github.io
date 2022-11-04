
import "./App.css";

import { Box, Flex, VStack, Image, Switch } from "@chakra-ui/react";
import { Profile } from "./Components/profile";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Flex>
        <Box className="sidebar">
          <Box
            color={"white"}
            fontFamily={"initial"}
            p={"50px"}
            bg={"#088aa8"}
            fontSize="49px"
          >
            Janhavi
          </Box>
          <Box bg={"#088aa8"} className="middlebar" mt={10}>
            <Box className="list" p={1}>
              Home
            </Box>
            <Box className="list">About</Box>
            <Box className="list">Skills</Box>
            <Box className="list">Project</Box>
            <Box className="list">Contact</Box>
            <Box className="list">
              <a
                href="https://drive.google.com/file/d/1YcBD5g0DmC-tmxuAL7GPBTFdVDal9e7I/view"
                target={"_blank"}
              >
                Resume
              </a>
            </Box>
          </Box>
          <Box mt={20} bg={"#088aa8"}>
            <Switch colorScheme={"cyan"} bg={"#088aa8"}></Switch>
          </Box>
        </Box>
        <Box className="smallsidebar">
          <VStack
            width={{ base: "100px" }}
            className="sidebarII"
            pos={"fixed"}
            bg={"#088aa8"}
          >
            {" "}
            /// sidebar 2 for responsive
            <Box
              width={{ base: "100px" }}
              className="bar"
              fontFamily={"-moz-initial"}
              color={"white"}
              padding={10}
              fontSize={{ base: "20px" }}
              bg={"#088aa8"}
              mb={10}
            >
              JP
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291396518.svg?token=exp=1666292246~hmac=48273bb60839ee7dca1d773d381d5e04"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291290816.svg?token=exp=1666292140~hmac=e72b926596d753c9384efc8d63415bb6"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291863456.svg?token=exp=1667368877~hmac=554552000c4e4d9500b055f20aad6549"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292017412.svg?token=exp=1667368877~hmac=3462805ab4e9b949bec998b857d4d714"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={10}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292196116.svg?token=exp=1667368877~hmac=197abc24b53b0559b8b92b605dc3d3af"
              />
            </Box>
            <Box
              width={{ base: "100px" }}
              className="bar"
              p={"25px"}
              bg={"#088aa8"}
              mt={10}
            >
              <Switch
                ml={{ base: "10px" }}
                size={{ base: "sm" }}
                className="bar"
                pb={"670px"}
                bg={"#088aa8"}
                colorScheme="cyan"
              ></Switch>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Box>
        <Profile />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Skills />
      </Box>
      <Box>
        <Work />
      </Box>
    </div>
  );
}

export default App;
