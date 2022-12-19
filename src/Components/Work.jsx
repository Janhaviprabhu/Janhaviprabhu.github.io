import { AspectRatio, Box,Button,Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "../App.css";
import {motion} from "framer-motion"
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";
import { FaExternalLinkAlt } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai"

export const Work = () => {
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
        mt={10}
        mb={10}
        fontWeight={600}
        textAlign="center"
        color={"#00B5D8"}
        fontSize={{ base: "23px", md: "25px", lg: "40px" }}
      >
        {" "}
        Proj{" "}
      </Text>
      <Box mt={"60px"}></Box>
      <SimpleGrid
        className="project_box"
        p={30}
        borderRadius={6}
        gap={10}
        boxShadow="rgba(10, 104, 204, 0.6) 0px 0px 0px 2px"
        m={"auto"}
        width={{ base: "95%", md: "85%", lg: "90%" }}
        columns={[1, 1, 1, 2]}
      >
        <Box m={"auto"}>
          <a href="https://five-metric.netlify.app/" target={"_blank"}>
            <Image
              className="project_image"
              src="https://user-images.githubusercontent.com/97351159/201516132-0c3a6515-8808-49d3-831c-b43ccf09f2ff.png"
              alt="Fivemetric"
              objectFit="cover"
            />
          </a>
        </Box>
        <Box p={2} m={"auto"} textAlign={"center"}>
          <Text
            textDecoration={"-moz-initial"}
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            Five Metric
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            This is an web application where you can easily track time on tasks
            and projects, create time entries, capture hours which keeps record
            of it.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            A collaborative project completed in 5 days
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            REACT | REDUX | NODE | EXPRESS | MONGODB | MONGOOSE | CHAKRA UI
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ base: "50%", sm: "32%", md: "15%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a href="https://five-metric.netlify.app/" target={"_blank"}>
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Watch Live
              </Button>
            </a>
            <a
              href="https://github.com/skshm2000/powerful-nut-6425"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
              >
                View Code
              </Button>
            </a>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            w={{ base: "50%", sm: "32%", md: "18%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a href="https://five-metric.netlify.app/" target={"_blank"}>
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", md: "30px", lg: "100px" }}
                fontSize={{ base: "13px", lg: "14px" }}
                textAlign={"center"}
              >
                <Text>
                  <FaExternalLinkAlt color="white" />
                </Text>
              </Button>
            </a>
            <a
              href="https://github.com/skshm2000/powerful-nut-6425"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "17px", lg: "14px" }}
              >
                <Text>
                  <AiFillGithub />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* pharm easy clone */}
      <Box mt={"60px"}></Box>
      <SimpleGrid
        className="project_box"
        mt={10}
        p={30}
        borderRadius={6}
        gap={10}
        boxShadow="rgba(10, 104, 204, 0.6) 0px 0px 0px 2px"
        m={"auto"}
        width={{ base: "95%", md: "85%", lg: "90%" }}
        alignContent={"center"}
        columns={[1, 1, 1, 2]}
      >
        <Box m={"auto"}>
          <a
            href="https://bright-nasturtium-5fc334.netlify.app/"
            target={"_blank"}
          >
            <Image
              className="project_image"
              src="https://user-images.githubusercontent.com/97351159/199207187-1605a618-2e09-4112-90b0-b752d9d53495.png"
              alt="PharmEasy"
              objectFit="cover"
            />
          </a>
        </Box>
        <Box p={2} m={"auto"} textAlign={"center"}>
          <Text
            textDecoration={"-moz-initial"}
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            PharmEasy clone
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            PharmEasy is a consumer healthcare “super app” that provides
            consumers with on-demand, healthcare products, comprehensive
            diagnostic test services, and teleconsultations thereby serving
            their healthcare needs.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ base: "50%", sm: "32%", md: "15%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://bright-nasturtium-5fc334.netlify.app/"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Watch Live
              </Button>
            </a>
            <a
              href="https://github.com/Janhaviprabhu/shrill-point-7214"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
              >
                View Code
              </Button>
            </a>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            w={{ base: "50%", sm: "22%", md: "15%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://bright-nasturtium-5fc334.netlify.app/"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "13px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                <Text>
                  <FaExternalLinkAlt color="white" />
                </Text>
              </Button>
            </a>
            <a
              href="https://github.com/Janhaviprabhu/shrill-point-7214"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "17px", lg: "14px" }}
              >
                <Text>
                  <AiFillGithub />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* boat live */}

      <Box mt={"60px"}></Box>
      <SimpleGrid
        className="project_box"
        p={30}
        borderRadius={6}
        gap={10}
        boxShadow="rgba(10, 104, 204, 0.6) 0px 0px 0px 2px"
        target={"_blank"}
        m={"auto"}
        width={{ base: "95%", md: "85%", lg: "90%" }}
        alignContent={"center"}
        columns={[1, 1, 1, 2]}
      >
        <Box m={"auto"}>
          <a href="https://boat-lifestyle-clone-7.netlify.app/index.html">
            <Image
              className="project_image"
              src="https://user-images.githubusercontent.com/97351159/199230407-7b8d8d6a-fcf2-4782-93c8-feee7da06b9c.png"
              alt="PharmEasy"
              objectFit="cover"
            />
          </a>
        </Box>
        <Box p={2} m={"auto"} textAlign={"center"}>
          <Text
            textDecoration={"-moz-initial"}
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            boat-lifestyle clone
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            India’s No.1 Earwear Audio Brand - boAt ollection of Earbuds,
            Headphones, Earphones & Wireless Speakers with contemporary designs
            and best features.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            A collaborative project of 5 members build in 5 days
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            HTML | CSS | JAVASCRIPT
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ base: "50%", sm: "32%", md: "18%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://boat-lifestyle-clone-7.netlify.app/index.html"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", md: "30px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Watch Live
              </Button>
            </a>
            <a
              href="https://github.com/Anantk05/boat-lifestyle.com-Clone"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
              >
                View Code
              </Button>
            </a>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            w={{ base: "50%", sm: "32%", md: "18%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://boat-lifestyle-clone-7.netlify.app/index.html"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", md: "30px", lg: "100px" }}
                fontSize={{ base: "13px", lg: "14px" }}
                textAlign={"center"}
              >
                <Text>
                  <FaExternalLinkAlt color="white" />
                </Text>
              </Button>
            </a>
            <a
              href="https://github.com/Anantk05/boat-lifestyle.com-Clone"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "17px", lg: "14px" }}
              >
                <Text>
                  <AiFillGithub />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* food app */}

      {/* <SimpleGrid
        className="project_box"
        p={30}
        borderRadius={6}
        gap={10}
        boxShadow="rgba(10, 104, 204, 0.6) 0px 0px 0px 2px"
        m={"auto"}
        width={{ base: "65%", md: "67%", lg: "75%" }}
        alignContent={"center"}
        columns={[1, 1, 1, 2]}
        ml={{ base: "121px", sm: "150px", md: "215px", lg: "350px" }}
      >
        <Box m={"auto"}>
          <a
            href="https://zippy-frangipane-5fe9c4.netlify.app/mealofday.html"
            target={"_blank"}
          >
            <Image
              className="project_image"
              src="https://user-images.githubusercontent.com/97351159/199303093-bbb270ec-b202-4dfd-918f-223f62629262.png"
              alt="Foodapp"
              objectFit="cover"
            />
          </a>
        </Box>
        <Box p={2} m={"auto"} textAlign={"center"}>
          <Text
            textDecoration={"-moz-initial"}
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            meal.com
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            Meal.com is a food app where you can search for any favorite food
            and get meal for the day.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            A solo project completed in 1 day
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            HTML | CSS | JAVASCRIPT
          </Text>

          <Flex
            w={{ base: "50%", sm: "32%", md: "15%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://zippy-frangipane-5fe9c4.netlify.app/mealofday.html"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Watch Live
              </Button>
            </a>
            <a
              href="https://github.com/Janhaviprabhu/Food-app"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
              >
                View Code
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid> */}

      {/* derm store// */}
      <Box mt={"60px"}></Box>
      <SimpleGrid
        className="project_box"
        p={30}
        borderRadius={6}
        gap={10}
        boxShadow="rgba(10, 104, 204, 0.6) 0px 0px 0px 2px"
        m={"auto"}
        width={{ base: "95%", md: "85%", lg: "90%" }}
        alignContent={"center"}
        columns={[1, 1, 1, 2]}
      >
        <Box m={"auto"}>
          <a href="https://fancy-brioche-5d361a.netlify.app/" target={"_blank"}>
            <Image
              className="project_image"
              src="https://i.imgur.com/rq2WHQR.png"
              alt="dermstore"
              objectFit="cover"
            />
          </a>
        </Box>
        <Box p={2} m={"auto"} textAlign={"center"}>
          <Text
            textDecoration={"-moz-initial"}
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            fontWeight="600"
          >
            dermstore clone
          </Text>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            lineHeight={{ base: "20px", md: "25px", lg: "30px" }}
          >
            Dermstore is an eCommerce website which sells all skin & hair
            related products at resonable price.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            This is a collaborative project of 5 members build in 5 days.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            mt={{ base: "5px", md: "10px", lg: "12px" }}
            fontWeight="600"
          >
            Tech stack
          </Text>
          <Text
            fontSize={{ base: "10px", md: "14px" }}
            mt={{ base: "2px", md: "5px", lg: "2px" }}
            letterSpacing={{ base: "0.5", lg: "2px" }}
          >
            HTML | CSS | JAVASCRIPT
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ base: "50%", sm: "32%", md: "18%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", md: "20px", lg: "40px" }}
          >
            <a
              href="https://fancy-brioche-5d361a.netlify.app/"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Watch Live
              </Button>
            </a>
            <a
              href="https://fancy-brioche-5d361a.netlify.app/"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "7px", lg: "14px" }}
              >
                View Code
              </Button>
            </a>
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            w={{ base: "50%", sm: "32%", md: "18%", lg: "50%" }}
            alignContent={"center"}
            margin={"auto"}
            gap={{ base: "10px", lg: "40px" }}
          >
            <a
              href="https://github.com/Janhaviprabhu/Food-app"
              target={"_blank"}
            >
              <Button
                mt={3}
                color={"white"}
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", md: "30px", lg: "100px" }}
                fontSize={{ base: "13px", lg: "14px" }}
                textAlign={"center"}
              >
                <Text>
                  <FaExternalLinkAlt color="white" />
                </Text>
              </Button>
            </a>
            <a
              href="https://github.com/Janhaviprabhu/Food-app"
              target={"_blank"}
            >
              <Button
                mt={3}
                color="white"
                _hover={{ background: "#0ab2d9" }}
                background={"#088aa8"}
                width={{ base: "20px", lg: "100px" }}
                fontSize={{ base: "17px", lg: "14px" }}
              >
                <Text>
                  <AiFillGithub />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};
