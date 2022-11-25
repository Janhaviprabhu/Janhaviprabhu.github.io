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
      <Box
        style={theme === "light" ? light : dark}
        className="skillsbox"
        bg={"#f5fcff"}
        ml={{ base: "130px", sm: "90px", md: "35px", lg: "170px" }}
        w={{ base: "90%", sm: "63%", md: "90%", lg: "80%" }}
        m="auto"
        mt="5%"
      >
        <Text
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          textAlign="center"
          color={"#00B5D8"}
          fontSize={{ base: "20px", md: "22px", lg: "43px" }}
        >
          Skills
        </Text>

        <Text
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          textAlign="center"
          fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          fontWeight={{ base: "600", md: "600" }}
          mt={{ base: "10px", md: "20px", lg: "35px" }}
          letterSpacing={{ base: "3px" }}
        >
          FRONT END{" "}
        </Text>
        <SimpleGrid
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          columns={[2, 2, 2, 4]}
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="600"
          rowGap={["2px", "5px", "5px", "10px"]}
        >
          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              HTML5
            </Text>
          </GridItem>

          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              CSS3
            </Text>
          </Box>

          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              JavaScript
            </Text>
          </Box>
          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              TypeScript
            </Text>
          </GridItem>

          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              React.Js
            </Text>
          </GridItem>

          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Redux
            </Text>
          </GridItem>
          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              NEXT.JS
            </Text>
          </GridItem>
          <GridItem
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://archive.org/download/github.com-chakra-ui-chakra-ui_-_2020-02-13_17-20-29/cover.jpg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Chakra Ui
            </Text>
          </GridItem>
        </SimpleGrid>

        <Text
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          textAlign="center"
          fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          fontWeight={{ base: "600", md: "600" }}
          mt={{ base: "10px", md: "20px", lg: "35px" }}
          letterSpacing={{ base: "3px" }}
        >
          BACK END{" "}
        </Text>
        <SimpleGrid
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          columns={[2, 2, 2, 4]}
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="600"
        >
          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Node.Js
            </Text>
          </Box>

          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Mongodb
            </Text>
          </Box>

          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Express
            </Text>
          </Box>
        </SimpleGrid>

        <Text
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          textAlign="center"
          fontSize={{ base: "12px", md: "18px", lg: "20px" }}
          fontWeight={{ base: "600", md: "600" }}
          mt={{ base: "10px", md: "20px", lg: "35px" }}
          letterSpacing={{ base: "3px" }}
        >
          Tools
        </Text>
        <SimpleGrid
          style={theme === "light" ? light : dark}
          bg={"#f5fcff"}
          ml={{ base: "120px", sm: "210px", md: "165px", lg: "300px" }}
          columns={[2, 2, 2, 4]}
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="600"
        >
          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Git Hub
            </Text>
          </Box>

          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://www.bing.com/th?id=OIP.VaZkv-LlK-FiNoKWVKp3vAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Netlify
            </Text>
          </Box>
          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://cdn.iconscout.com/icon/free/png-128/heroku-2752161-2284978.png"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Heroku
            </Text>
          </Box>
          <Box
            style={theme === "light" ? light : dark}
            bg={"#f5fcff"}
            m="auto"
            mt={{ base: "20px", md: "30px", lg: "6" }}
          >
            <Image
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              p={2}
              w={{ base: "45px", md: "80px", lg: "80px" }}
              src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Text
              style={theme === "light" ? light : dark}
              bg={"#f5fcff"}
              textAlign="center"
              mt={{ base: "10px", lg: "15px" }}
            >
              Postman
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box style={theme === "light" ? light : dark}>
        <GitCalender />
      </Box>
      <Box style={theme === "light" ? light : dark}>
        <GitStats />
      </Box>
    </>
  );
};
