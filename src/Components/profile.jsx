import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import "../App.css";
import Typed from "react-typed";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";

export const Profile = () => {
  const { theme } = useContext(AppContex);
  const light = {
    backgroundColor: "#f5fcff",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "#f5fcff",
  };
  const jpdark = {
    color: "#00B5D6",
    backgroundColor: "black",
  };
  const jplight = {
    color: "#00B5D6",
  };
  return (
    <>
      <Box></Box>
      <Flex
        style={theme === "light" ? light : dark}
      
      textAlign={'center'}
        gap={10}
        alignItems={{ base: "center", md: "center" }}
       w="55%"
       margin={'auto'}
        mt={20}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          style={theme === "light" ? light : dark}
          textAlign={{ base: "center", lg: "center" }}
          lineHeight={{ base: "35px", md: "50px", lg: "80px" }}
          fontSize={{ base: "24px", md: "40px", lg: "44px" }}
        >
          <Flex
            style={theme === "light" ? light : dark}
            justifyContent="center"
            gap="7px"
            direction={{ base: "column", lg: "column" }}
          >
            <Box style={theme === "light" ? light : dark}>
              {" "}
              <Typed
                style={theme === "light" ? light : dark}
                
                strings={[" Hello 👋🏻 , Fellow &lt; Developers /&gt;"]}
                typeSpeed={30}
              />
            </Box>
            <Text style={theme === "light" ? light : dark} textAlign={"center"}>
              <b style={theme === "light" ? light : dark}>I'm </b>
              <b style={theme === "light" ? jplight : jpdark}>
                {" "}
                Janhavi Prabhu
              </b>
            </Text>
          </Flex>
          <Box style={theme === "light" ? light : dark} textAlign={"center"}>
            Full Stack Web Developer
          </Box>
          <Box style={theme === "light" ? light : dark} textAlign={"center"}>
            <a
              href="https://drive.google.com/file/d/1YcBD5g0DmC-tmxuAL7GPBTFdVDal9e7I/view"
              target={"_blank"}
            >
              {" "}
              <Button
                _hover={{ backgroundColor: "#00B5D6" }}
                fontSize={"20px"}
                width={"160px"}
                color={"white"}
                background={"#088aa8"}
              >
                View CV
              </Button>
            </a>
          </Box>
        </Box>
        <Box style={theme === "light" ? light : dark}>
          <Image
          ml={5}
            style={theme === "light" ? light : dark}
            width={{ base: "190px", lg: "350px" }}
            borderRadius={"50%"}
            src="https://avatars.githubusercontent.com/u/97351159?v=4"
          />
        </Box>
      </Flex>
    </>
  );
};
