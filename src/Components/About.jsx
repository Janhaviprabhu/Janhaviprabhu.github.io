import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";
import { GitCalender } from "./GitCalender";

export const About = () => {
  const { theme } = useContext(AppContex);
  const light = {
    backgroundColor: "#f5fcff",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
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
      <Box style={theme === "light" ? light : dark} bg={"#f5fcff"}>
        <Text
          fontWeight={600}
          style={theme === "light" ? jplight : jpdark}
          textAlign={"center"}
          color={"#00B5D8"}
          mt={"110px"}
          fontSize={{ base: "23px", md: "25px", lg: "40px" }}
        >
          About Me
        </Text>
      </Box>
      <Box
        textAlign={"center"}
        w="65%"
        margin={"auto"}
        style={theme === "light" ? light : dark}
      >
        <Text
          style={theme === "light" ? light : dark}
          mt={{ base: "7px", md: "10px" }}
          fontSize={{ base: "15px", md: "18px", lg: "20px" }}
          pr={10}
        >
          A curious learner and an aspiring Full-stack Web Developer with an
          experience of bulding applications using MERN Framework. Looking for
          an entry-level position as a Developer in a dynamic firm that values
          my analytical and technical skills and provides scope for updating my
          knowledge.{" "}
        </Text>
      </Box>
    </>
  );
};
