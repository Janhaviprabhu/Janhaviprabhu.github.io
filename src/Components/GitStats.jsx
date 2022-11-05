
import { Box, Flex, Image, Text } from "@chakra-ui/react";
export const GitStats=()=>{
    return (
      <>
        <Text
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "140px", md: "172px", lg: "350px" }}
          textAlign="center"
          fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          fontWeight={{ base: "600", md: "600" }}
          mt={{ base: "50px", md: "80px", lg: "55px" }}
          letterSpacing={{ base: "3px" }}
        >
          GITHUB STATS
        </Text>
        <Flex
          width={{ base: "70%", md: "80%", lg: "60%" }}
          ml={{ base: "125px", sm: "150px", md: "155px", lg: "490px" }}
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mt={{ base: "10px", sm: "30px", md: "30px", lg: "50px" }}
          gap={{ base: "15px", md: "35px", lg: "70px" }}
        >
          <Box>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "250px", md: "480px", lg: "500px" }}
                src="https://github-readme-streak-stats.herokuapp.com/?user=Janhaviprabhu"
              />
            </a>
          </Box>

          <Box>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "300px", md: "490px", lg: "500px" }}
                src="https://github-readme-stats.vercel.app/api?username=Janhaviprabhu&count_private=true&show_icons=true"
              />
            </a>
          </Box>
        </Flex>

        <Flex
          bg={"#f5fcff"}
          ml={{ base: "125px", sm: "150px", md: "155px", lg: "478px" }}
          width={{ base: "70%", md: "80%", lg: "60%" }}
          mt={{ base: "15px", md: "25px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "250px", md: "260px", lg: "350px" }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Janhaviprabhu"
              />
            </a>
          </Box>
        </Flex>
      </>
    );
}