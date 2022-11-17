import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import "../App.css";
import Typed from "react-typed";

export const Profile = () => {
  return (
    <>
      <Box></Box>
      <Flex
       bg={"#f5fcff"}
        pr={10}
        gap={10}
        alignItems={{ base: "center", md: "center" }}
        ml={{ base: "160px", sm: "200px", md: "200px", lg: "400px" }}
        mt={20}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          textAlign={{ base: "left", lg: "left" }}
          lineHeight={{ base: "35px", md: "50px", lg: "80px" }}
          fontSize={{ base: "28px", md: "40px", lg: "44px" }}
        >
          <Flex
            justifyContent="center"
            gap="7px"
            direction={{ base: "column", lg: "column" }}
          >
            <Typed
              strings={[" Hello 👋🏻 , Fellow &lt; Developers /&gt;"]}
              typeSpeed={30}
            />
            <Text textAlign={"center"}>
              <b>I'm </b>
              <b style={{ color: "#00B5D8" }}> Janhavi Prabhu</b>
            </Text>
          </Flex>
          <Box textAlign={"center"}>Full Stack Web  Developer</Box>
          <Box textAlign={"center"}>
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
        <Box>
          <Image
            width={{ base: "190px", lg: "350px" }}
            borderRadius={"50%"}
            src="https://avatars.githubusercontent.com/u/97351159?v=4"
          />
        </Box>
      </Flex>
    </>
  );
};
