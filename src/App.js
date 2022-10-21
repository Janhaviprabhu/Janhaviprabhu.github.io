import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Box, Flex, VStack ,Image, Switch} from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <Flex>
        <Box className="sidebar">
          <Box
            color={"white"}
            fontFamily={"initial"}
            p={"60px"}
            bg={"#088aa8"}
            fontSize="46px"
          >
            Janhavi
          </Box>
          <Box bg={"#18172e"} className="middlebar" mt={10}>
            <Box className="list" p={1}>
              Home
            </Box>
            <Box className="list">About</Box>
            <Box className="list">Skills</Box>
            <Box className="list">Project</Box>
            <Box className="list">Contact</Box>
          </Box>
          <Box mt={20} bg={"#088aa8"}>
            <Switch colorScheme={"cyan"} bg={"#088aa8"}></Switch>
          </Box>
        </Box>
        <Box className="smallsidebar">
          <VStack className="sidebarII" pos={"fixed"} bg={"#088aa8"}>
            <Box
              className="bar"
              fontFamily={"-moz-initial"}
              color={"white"}
              padding={10}
              fontSize={"56px"}
              bg={"#088aa8"}
              mb={10}
            >
              JP
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291396518.svg?token=exp=1666292246~hmac=48273bb60839ee7dca1d773d381d5e04"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"50px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291290816.svg?token=exp=1666292140~hmac=e72b926596d753c9384efc8d63415bb6"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666291863456.svg?token=exp=1666292712~hmac=b72e20652ab74d24e47b6baba42416b2"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={6}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292017412.svg?token=exp=1666292866~hmac=c4f2e7ba3e7eeed64e8131f3960e24de"
              />
            </Box>
            <Box className="bar" bg={"#088aa8"}>
              <Image
                bg={"#088aa8"}
                mb={10}
                width={"40px"}
                src="https://cdn-user-icons.flaticon.com/73546/73546517/1666292196116.svg?token=exp=1666293045~hmac=3e2c4d3f69a388d1b2ab92fe4293035b"
              />
            </Box>
            <Box className="bar" p={"42px"} bg={"#088aa8"} mt={10}>
              <Switch
                className="bar"
                pb={"250px"}
                bg={"#088aa8"}
                colorScheme="cyan"
              ></Switch>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </div>
  );
}

export default App;
