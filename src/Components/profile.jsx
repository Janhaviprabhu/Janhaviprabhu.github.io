import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";


export const Profile = () => {
  return (
    <>
      <Box></Box>
      <Flex
        pr={10}
        gap={10}
        alignItems={{ base: "center", md: "center" }}
        ml={{ base: "160px", sm: "200px", md: "255px", lg: "400px" }}
        mt={20}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          textAlign={{ base: "left", lg: "left" }}
          lineHeight={{ base: "35px", md: "50px", lg: "80px" }}
          fontSize={{ base: "28px", md: "40px", lg: "47px" }}
        >
          <Flex
            justifyContent="center"
            gap="7px"
            direction={{ base: "column", lg: "column" }}
          >
            <Text textAlign={"center"}>
              <b>Hello &#128075;&#127995; , Fellow &lt; Developers /&gt;</b>
            </Text>
            <Text textAlign={"center"}>
              <b>I'm </b>
              <b style={{ color: "#00B5D8" }}> Janhavi Prabhu</b>
            </Text>
          </Flex>
          <Box textAlign={"center"}>Full Stack Developer</Box>
          <Box textAlign={"center"}>
            <a
              href="https://drive.google.com/file/d/1iz01mtNZE-e1O-OPiFp4MoTKUBYHkEtc/view?usp=sharing"
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
