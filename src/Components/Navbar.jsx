import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import { useContext } from "react";
import { AppContex } from "../Context/Authcontext";

const Links = [];

const light = {
  backgroundColor: "#088aa8",
  color: "white",
};

const dark = {
  backgroundColor: "black",
  color: "#00B5D6",
};

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple({ Profile, About, Skills, Projects, Contact }) {
  const { ToggleTheme, theme } = useContext(AppContex);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDownload = () => {
    return window.open(
      "https://drive.google.com/file/d/1YcBD5g0DmC-tmxuAL7GPBTFdVDal9e7I/view?usp=share_link"
    );
  };

  return (
    <>
      <Box
        boxShadow="rgba(50, 93, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        style={theme === "light" ? light : dark}
        w="100%"
        position={"fixed"}
        p={2}
      >
        <Flex
          pl={{ base: "5px", lg: "30px" }}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            style={theme === "light" ? light : dark}
            size={"lg"}
            icon={
              isOpen ? (
                <CloseIcon />
              ) : (
                <HamburgerIcon style={theme === "light" ? light : dark} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontFamily={"cursive"} fontWeight={400} fontSize={"28px"}>
              JP
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                _hover={{ textDecoration: "underline" }}
                letterSpacing={1}
                fontWeight={600}
                fontSize={"19px"}
                onClick={Profile}
                cursor="pointer"
              >
                Profile
              </Box>
              <Box
                _hover={{ textDecoration: "underline" }}
                letterSpacing={1}
                fontWeight={600}
                fontSize={"19px"}
                onClick={About}
                cursor="pointer"
              >
                About
              </Box>
              <Box
                _hover={{ textDecoration: "underline" }}
                letterSpacing={1}
                fontWeight={600}
                fontSize={"19px"}
                onClick={Skills}
                cursor="pointer"
              >
                Skills
              </Box>
              <Box
                _hover={{ textDecoration: "underline" }}
                letterSpacing={1}
                fontWeight={600}
                fontSize={"19px"}
                onClick={Projects}
                cursor="pointer"
              >
                Projects
              </Box>
              <Box
                _hover={{ textDecoration: "underline" }}
                letterSpacing={1}
                fontWeight={600}
                fontSize={"19px"}
                onClick={Contact}
                cursor="pointer"
              >
                Contact
              </Box>
            </HStack>
          </HStack>
          <Flex pr={{ base: "5px", lg: "30px" }} gap={10} alignItems={"center"}>
            <Button
              boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              color={"white"}
              fontSize={"19px"}
              letterSpacing={1}
              fontWeight={400}
              as={Link}
              download={true}
              _hover={{ backgroundColor: "#00B5D6", textDecoration: "none" }}
              background={"#088aa8"}
              rightIcon={<HiDocumentDownload />}
              href="/Janhavi_Prabhu_Resume.pdf"
              onClick={handleDownload}
              target="_blank"
            >
              Resume
            </Button>
            <Box
              mt="-2px"
              style={theme === "light" ? light : dark}
              className="list"
            >
              <Text
                fontSize={"24px"}
                justifyContent={"center"}
                display="flex"
                onClick={ToggleTheme}
                cursor="pointer"
              >
                {theme === "light" ? (
                  <BsMoonFill style={{ background: "#088aa8" }} color="white" />
                ) : (
                  <BsFillSunFill style={{ background: "black" }} />
                )}
              </Text>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box onClick={Profile}>Profile</Box>
              <Box onclick={About}>About</Box>
              <Box onClick={Skills}>Skills</Box>
              <Box onClick={Projects}>Projects</Box>
              <Box onClick={Contact}>contact</Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}
