import { Box ,Text} from "@chakra-ui/react"

export const About=()=>{
    return (
      <>
        <Box ml={{ base: "160px", sm: "200px", md: "255px", lg: "390px" }}>
          <Text
            textAlign={"center"}
            color={"#00B5D8"}
            ml={{ lg: "-70px" }}
            fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          >
            About Me
          </Text>
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