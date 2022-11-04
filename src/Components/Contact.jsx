import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail, GrLocation } from "react-icons/gr";

export const Contact = () => {
  return (
    <>
      <Text
        ml={{ base: "130px", sm: "160px", md: "175px", lg: "370px" }}
        mt={10}
        textAlign="center"
        color="#00B5D8"
        fontSize={{ base: "20px", md: "23px", lg: "40px" }}
      >
        Contact Me
      </Text>
      <Flex
        mt={10}
        textAlign={"center"}
        alignContent="center"
        w={{ base: "10%", sm: "70%", md: "60%", lg: "80%" }}
        justifyContent="space-around"
        ml={{ base: "190px", sm: "100px", md: "195px", lg: "220px" }}
      >
        <Box ml={{ base: "20px", sm: "90px", md: "35px", lg: "170px" }}>
          <a target={"_blank"} href="tel:+917738112993">
            {" "}
            <Text
              fontSize={{ base: "22px", md: "26px", lg: "36px" }}
              textAlign={"center"}
              ml="50px"
              mb={"10px"}
            >
              <AiFillPhone />
            </Text>
          </a>{" "}
        </Box>
        <Box>
          <a
            fontSize={{ base: "12px", md: "26px", lg: "36px" }}
            target={"_blank"}
            href="mailto:januprabhu26@email.com"
          >
            <Text
              fontSize={{ base: "22px", md: "26px", lg: "36px" }}
              textAlign={"center"}
              ml="60px"
              mb={"10px"}
            >
              <GrMail />
            </Text>{" "}
          </a>
        </Box>
        <Box>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/janhaviprabhu2604/"
          >
            <Text
              fontSize={{ base: "22px", md: "26px", lg: "36px" }}
              textAlign={"center"}
              ml="50px"
              mb={"10px"}
            >
              <BsLinkedin />
            </Text>
          </a>
        </Box>
      </Flex>
      <Text
        ml={{ base: "130px", sm: "160px", md: "175px", lg: "370px" }}
        mt={10}
        fontSize={{ base: "13px", md: "13px", lg: "20px" }}
      >
        {/* <Flex alignContent={"center"}> */}
          <Text
            fontSize={{ base: "22px", md: "26px", lg: "36px" }}
            ml={{ base: "110px", sm: "160px", md: "300px", lg: "545px" }}
          >
            <GrLocation />
          </Text>
          <Text ml={{ base: "70px", sm: "100px", md: "265px", lg: "460px" }}>
            {" "}
            Mumbai, Maharashtra
          </Text>
        {/* </Flex> */}
      </Text>
      <Box mt={10} ml={{ base: "100px", sm: "160px", md: "335px", lg: "770px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161003172!2d72.74109806321596!3d19.082197838151572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1667570151649!5m2!1sen!2sin"
          w={{ base: "2px", sm: "90px", md: "35px", lg: "600px" }}
          h={{ base: "8px", sm: "90px", md: "35px", lg: "630px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};
