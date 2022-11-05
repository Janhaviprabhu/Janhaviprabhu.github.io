import { Box ,Text} from "@chakra-ui/react"
import { GitCalender } from "./GitCalender";

export const About=()=>{
    return (
      <>
        <Box
          bg={"#f5fcff"}
          ml={{ base: "130px", sm: "140px", md: "175px", lg: "390px" }}
        >
          <Text
            textAlign={"center"}
            color={"#00B5D8"}
            ml={{ lg: "-70px" }}
            mt={10}
            fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          >
            About Me
          </Text>
        </Box>
        <Box ml={{ base: "150px", sm: "140px", md: "175px", lg: "390px" }}>
          <Text
            mt={{ base: "7px", md: "10px" }}
            fontSize={{ base: "15px", md: "18px", lg: "20px" }}
            pr={10}
          >
            A curious learner and an aspiring Full-stack Web Developer with an
            experience of bulding applications using MERN Framework. Looking for
            an entry-level position as a Developer in a dynamic firm that values
            my analytical and technical skills and provides scope for updating
            my knowledge.{" "}
          </Text>
        </Box>
      </>
    );
   
}