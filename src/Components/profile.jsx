import { Box, Flex,Text } from "@chakra-ui/react"

export const Profile=()=>{
  return (
    <>
      <Box></Box>
      <Flex ml={{ base: "160px",sm:'200px', md: "320px", lg:"460px" }} mt={20}>
        <Box
          textAlign={{ base: "left", lg: "left" }}
           lineHeight={{ base: "35px", md: "50px", lg: "80px" }}
          fontSize={{ base: "30px", md: "45px", lg: "50px" }}
        >
          <Flex
            justifyContent="center"
            gap="7px"
            direction={{ base: "column", lg: "column" }}
          >
            <Text>
              <b>Hello &#128075;&#127995; , Fellow &lt; Developers /&gt;</b>
            </Text>
            <Text>
              <b>I'm </b>
              <b style={{ color: "#00B5D8" }}>Janhavi Prabhu</b>
            </Text>
          </Flex>
          <Box>Full Stack Developer</Box>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
}