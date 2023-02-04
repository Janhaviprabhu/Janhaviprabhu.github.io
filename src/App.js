import "./App.css";
import { motion } from "framer-motion";
import { Box, Flex, VStack, Image, Switch, Text } from "@chakra-ui/react";
import { Profile } from "./Components/profile";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";
import { useContext, useRef} from "react";
import { AppContex } from "./Context/Authcontext";
import Simple from "./Components/Navbar";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';


function App() {
  const { theme } = useContext(AppContex);
  const Profileref = useRef(null);
  const Aboutref = useRef(null);
  const Skillsref = useRef(null);
  const Projectref = useRef(null);
  const Contactref = useRef(null);

  const light = {
    backgroundColor: "#f5fcff",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "#f5fcff",
  };

  const handleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div style={theme === "light" ? light : dark} className="App">
      <CustomCursor targets={['.link', '.your-css-selector']} customClass='custom-cursor' dimensions={50} fill='#088aa8' strokeColor='#053c49' strokeWidth={4} smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <Simple
        Profile={() => handleScrollTo(Profileref)}
        About={() => handleScrollTo(Aboutref)}
        Skills={() => handleScrollTo(Skillsref)}
        Projects={() => handleScrollTo(Projectref)}
        Contact={() => handleScrollTo(Contactref)}
      />

      {/*-------------- all content---------------------- */}
      <Box style={theme === "light" ? light : dark} ref={Profileref}>
        <Profile />
      </Box>
      <Box style={theme === "light" ? light : dark} ref={Aboutref}>
        <About />
      </Box>
      <Box style={theme === "light" ? light : dark} ref={Skillsref}>
        <Skills />
      </Box>
      <Box style={theme === "light" ? light : dark} ref={Projectref}>
        <Work />
      </Box>
      <Box style={theme === "light" ? light : dark} ref={Contactref}>
        <Contact />
      </Box>
    </div>
  );
}

export default App;
