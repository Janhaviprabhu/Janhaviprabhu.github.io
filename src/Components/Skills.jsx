import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GitStats } from "./GitStats";
import { GitCalender } from "./GitCalender";
import "../App.css";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";
export const Skills = () => {
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
        <Text fontWeight={600}  textAlign="center"  color={"#00B5D8"} fontSize={{ base: "23px", md: "25px", lg: "43px" }}>Technical Skills</Text>

        <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" fontSize={{ base: "12px", md: "18px", lg: "20px" }} fontWeight={{ base: "600", md: "600" }} mt={{ base: "10px", md: "20px", lg: "35px" }} letterSpacing={{ base: "3px" }}>
          FRONT END{" "}
        </Text>

        <SimpleGrid  width={{base : '95%', md :'85%', lg: '80%'}} m='auto' style={theme === "light" ? light : dark} bg={"#f5fcff"} columns={[4, 3, 4, 4]} fontSize={{ base: "12px", md: "14px" }} fontWeight="600" rowGap='10px'>
          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > HTML5</Text>
          </GridItem>

         <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > CSS3</Text>
          </GridItem>

          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > JavaScript</Text>
          </GridItem>


        <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > React</Text>
        </GridItem>

         
        <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > TypeScript</Text>
        </GridItem>

        <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > Redux</Text>
        </GridItem>

        <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > NextJs</Text>
        </GridItem>

        <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > Chakra UI</Text>
        </GridItem>
      </SimpleGrid>

        <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" fontSize={{ base: "12px", md: "18px", lg: "20px" }} fontWeight={{ base: "600", md: "600" }} mt={{ base: "10px", md: "20px", lg: "35px" }} letterSpacing={{ base: "3px" }}>
          BACKEND END{" "}
        </Text>

        <SimpleGrid  width={{base : '95%', md :'85%', lg: '80%'}} m='auto' style={theme === "light" ? light : dark} bg={"#f5fcff"} columns={[4, 3, 4, 4]} fontSize={{ base: "12px", md: "14px" }} fontWeight="600" rowGap='10px'>
          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > NodeJs</Text>
          </GridItem>

         <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > Express</Text>
          </GridItem>

          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} >MongoDB</Text>
          </GridItem>

           <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redis/redis-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} >Redis</Text>
          </GridItem>
      </SimpleGrid>

        <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" fontSize={{ base: "12px", md: "18px", lg: "20px" }} fontWeight={{ base: "600", md: "600" }} mt={{ base: "10px", md: "20px", lg: "35px" }} letterSpacing={{ base: "3px" }}>
          Tools
        </Text>

        <SimpleGrid  width={{base : '95%', md :'85%', lg: '80%'}} m='auto' style={theme === "light" ? light : dark} bg={"#f5fcff"} columns={[4, 3, 4, 4]} fontSize={{ base: "12px", md: "14px" }} fontWeight="600" rowGap='10px'>
          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-plain.svg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > Git</Text>
          </GridItem>

         <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} > Git Hub</Text>
          </GridItem>

          <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} >AWS</Text>
          </GridItem>

           <GridItem style={theme === "light" ? light : dark} bg={"#f5fcff"} m="auto" mt={{ base: "20px", md: "30px", lg: "6" }} >
            <Image style={theme === "light" ? light : dark} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={"#f5fcff"} p={4} w={{ base: "65px", md: "85px", lg: "90px" }}  src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1535488314/postman.jpg"  _hover={{ transform: "scale(1.2)" }}/>
            <Text style={theme === "light" ? light : dark} bg={"#f5fcff"} textAlign="center" mt={{ base: "12px", lg: "16px" }} >Postman</Text>
          </GridItem>
      </SimpleGrid>
      
      <Box style={theme === "light" ? light : dark}>
        <GitCalender />
      </Box>
      <Box style={theme === "light" ? light : dark}>
        <GitStats />
      </Box>
    </>
  );
};
