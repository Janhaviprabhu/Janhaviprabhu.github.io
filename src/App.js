import "./App.css";

import { Box, Flex, VStack, Image, Switch } from "@chakra-ui/react";
import { Profile } from "./Components/profile";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";
import { useRef } from "react";


function App() {
  const Profileref=useRef(null)
  const Aboutref=useRef(null)
  const  Skillsref=useRef(null)
  const Projectref=useRef(null)
  const Contactref=useRef(null)

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
              <Image
                onClick={() => handleScrollTo(Profileref)}
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1667575019988.svg?token=exp=1667575924~hmac=918264545f897786f4a4b5a0fa869e23"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                onClick={() => handleScrollTo(Aboutref)}
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1667575295731.svg?token=exp=1667576199~hmac=8270b2093543abedb96321ce0a0ec5f1"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                onClick={() => handleScrollTo(Skillsref)}
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291863456.svg?token=exp=1667368877~hmac=554552000c4e4d9500b055f20aad6549"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                onClick={() => handleScrollTo(Projectref)}
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292017412.svg?token=exp=1667368877~hmac=3462805ab4e9b949bec998b857d4d714"
              />
            </Box>
            <Box pb={"770px"} className="bar" bg={"#088aa8"}>
              <Image
                onClick={() => handleScrollTo(Contactref)}
                bg={"#088aa8"}
                mb={10}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292196116.svg?token=exp=1667368877~hmac=197abc24b53b0559b8b92b605dc3d3af"
              />
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Box ref={Profileref}>
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
