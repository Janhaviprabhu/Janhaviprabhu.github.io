
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";
export const GitStats=()=>{
      const { theme } = useContext(AppContex);
      const light = {
        backgroundColor: "#f5fcff",
        color: "black",
      };

      const dark = {
        backgroundColor: "black",
        color: "#f5fcff",
      };
    return (
      <>
        <Text
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
         
          textAlign="center"
          fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          fontWeight={{ base: "600", md: "600" }}
          mt={{ base: "50px", md: "80px", lg: "55px" }}
          letterSpacing={{ base: "3px" }}
        >
          GITHUB STATS
        </Text>
        <Flex
          style={theme === "light" ? light : dark}
          width={{ base: "70%", md: "80%", lg: "70%" }}
         margin='auto'
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="center"
          alignItems="center"
          mt={{ base: "10px", sm: "30px", md: "30px", lg: "50px" }}
          gap={{ base: "15px", md: "35px", lg: "70px" }}
        >
          <Box style={theme === "light" ? light : dark}>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "270px", md: "480px", lg: "500px" }}
                src="https://github-readme-streak-stats.herokuapp.com/?user=Janhaviprabhu&show_icons=true&count_private=true"
              />
            </a>
          </Box>

          <Box style={theme === "light" ? light : dark}>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "270px", md: "480px", lg: "500px" }}
                src="https://github-readme-stats.vercel.app/api?username=Janhaviprabhu&count_private=true&show_icons=true"
              />
            </a>
          </Box>
        </Flex>

        <Flex
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          
          width={{ base: "70%", md: "80%", lg: "60%" }}
          margin='auto'
          mt={{ base: "15px", md: "25px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box style={theme === "light" ? light : dark}>
            <a href="https://github.com/Janhaviprabhu">
              <Image
                width={{ base: "250px", md: "260px", lg: "330px" }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Janhaviprabhu"
              />
            </a>
          </Box>
        </Flex>
      </>
    );
}