import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

export const Work = () => {
  return (
    <>
      <Text
        ml={{ base: "120px", sm: "215px", md: "165px", lg: "350px" }}
        textAlign="center"
        color={"#00B5D8"}
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
      >
        Projects
      </Text>
      <SimpleGrid
        
        ml={{lg: "300px" }}
        columns={[1, 1, 1, 2]}
        w={{ base: "65%", md: "80%", lg: "80%" }}
        m="auto"
        columnGap="40px"
        rowGap="25px"
        mt={{ base: "15px" }}
        p={{ base: "15px", md: "20px", lg: "25px" }}
      >
        <Box  className="cardImg" m="auto">
          <Image
            m="auto"
            src="https://user-images.githubusercontent.com/103938174/195987381-d7a8e571-2cd5-43d2-9945-5800aac0819f.png"
            alt="Front Img"
            borderRadius="8px"
          />
        </Box>

        <Box m="auto">
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            BeautyBebo.com
          </Text>
          <Text
            fontSize={{ base: "13px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            Beauty Bebo is India’s fastest growing online retail store for the
            day to day and special occasion need of the Makeup, Skin care, Hair
            care, Personal care, Mom and Baby care, Fragrance and Ayurveda
            products.
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
          >
            An Indivial project built and executed in 4 Days
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech Stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS | NPM
          </Text>
          <Flex gap="20px" mt={{ base: "10px" }}>
            <Text fontSize={{ base: "20px", md: "25px", lg: "26px" }}>
              <a href="https://beauty-bebo-inky.vercel.app/" target="_blank">
                <AiFillChrome />
              </a>
            </Text>
            <Text fontSize={{ base: "20px", md: "25px", lg: "26px" }}>
              <a
                href="https://github.com/heyabrar/goldy-rake-5952"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};
