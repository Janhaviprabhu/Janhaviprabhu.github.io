import "./App.css";
import { motion } from "framer-motion";
import { Box, Flex, VStack, Image, Switch, Text } from "@chakra-ui/react";
import { Profile } from "./Components/profile";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";
import { useEffect, useRef, useState } from "react";
import { AiFillContacts, AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";

function App() {
  const Profileref = useRef(null);
  const Aboutref = useRef(null);
  const Skillsref = useRef(null);
  const Projectref = useRef(null);
  const Contactref = useRef(null);

  const handleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

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
            <Box className="list" onClick={() => handleScrollTo(Profileref)}>
              Home
            </Box>
            <Box className="list" onClick={() => handleScrollTo(Aboutref)}>
              About
            </Box>
            <Box onClick={() => handleScrollTo(Skillsref)} className="list">
              Skills
            </Box>
            <Box onClick={() => handleScrollTo(Projectref)} className="list">
              Project
            </Box>
            <Box className="list" onClick={() => handleScrollTo(Contactref)}>
              Contact
            </Box>
            <Box className="list">
              <a
                href="https://drive.google.com/file/d/1YcBD5g0DmC-tmxuAL7GPBTFdVDal9e7I/view"
                target={"_blank"}
              >
                Resume
              </a>
            </Box>
          </Box>
        </Box>
        <Box className="smallsidebar">
          {" "}
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
              <Text
                onClick={() => handleScrollTo(Profileref)}
                mb={10}
                fontSize={25}
                bg={"#088aa8"}
              >
                <AiFillHome style={{ background: "#088aa8" }} color="white" />
              </Text>
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Text
                onClick={() => handleScrollTo(Aboutref)}
                mb={10}
                fontSize={25}
                bg={"#088aa8"}
              >
                <SiAboutdotme style={{ background: "#088aa8" }} color="white" />
              </Text>
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Text
                onClick={() => handleScrollTo(Skillsref)}
                mb={10}
                fontSize={25}
                bg={"#088aa8"}
              >
                <GiSkills style={{ background: "#088aa8" }} color="white" />
              </Text>
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Text
                onClick={() => handleScrollTo(Projectref)}
                mb={10}
                fontSize={25}
                bg={"#088aa8"}
              >
                <RiComputerFill
                  style={{ background: "#088aa8" }}
                  color="white"
                />
              </Text>
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Text
                onClick={() => handleScrollTo(Contactref)}
                mb={10}
                fontSize={25}
                bg={"#088aa8"}
              >
                <AiFillContacts
                  style={{ background: "#088aa8" }}
                  color="white"
                />
              </Text>
            </Box>
            <Box pb={"785px"} className="bar" bg={"#088aa8"}>
              <a
                href="https://drive.google.com/file/d/1YcBD5g0DmC-tmxuAL7GPBTFdVDal9e7I/view"
                target={"_blank"}
              >
                <Text mb={10} fontSize={27} bg={"#088aa8"} color="white">
                  <AiFillProfile
                    style={{ background: "#088aa8", color: "white" }}
                  />
                </Text>
              </a>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Box  ref={Profileref}>
        <Profile />
      </Box>
      <Box ref={Aboutref}>
        <About />
      </Box>
      <Box ref={Skillsref}>
        <Skills />
      </Box>
      <Box ref={Projectref}>
        <Work />
      </Box>
      <Box ref={Contactref}>
        <Contact />
      </Box>
    </div>
  );
}

export default App;
