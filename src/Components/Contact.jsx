import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrMail, GrLocation } from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";

export const Contact = () => {
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
        mt={10}
        textAlign="center"
        color="#00B5D8"
        fontWeight={600}
        fontSize={{ base: "20px", md: "23px", lg: "40px" }}
      >
        Contact Me
      </Text>
      <Flex
        style={theme === "light" ? light : dark}
        bg={"#f5fcff"}
        mt={10}
        textAlign={"center"}
        alignContent="center"
        w={{ base: "10%", sm: "70%", md: "60%", lg: "90%" }}
        justifyContent="space-around"
        margin={"auto"}
      >
        <Box mt={5}>
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
              mt={5}
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
              mt={5}
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

      <Text mt={10} fontSize={{ base: "13px", md: "13px", lg: "20px" }}>
        {/* <Flex alignContent={"center"}> */}
        <Text
          fontSize={{ base: "22px", md: "26px", lg: "36px" }}
          
          textAlign='center'
        >
          
        </Text>
        <Text textAlign={'center'} >
          {" "}
          Mumbai, Maharashtra
        </Text>
        {/* </Flex> */}
      </Text>
      {/* <Box
        mt={10}
        ml={{ base: "100px", sm: "160px", md: "335px", lg: "770px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1161003172!2d72.74109806321596!3d19.082197838151572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1667570151649!5m2!1sen!2sin"
          w={{ base: "2px", sm: "90px", md: "35px", lg: "600px" }}
          h={{ base: "8px", sm: "90px", md: "35px", lg: "630px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box> */}
      <Box textAlign={'center'} >
        Designed by Janhavi Prabhu
      </Box>
      <Text
      textAlign={'center'}
        style={theme === "light" ? light : dark}
        pb={10}
     
        gap={1}
        
        
      >
        Copyrights © 2022
      </Text>
    </>
  );
};
