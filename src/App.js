import "./App.css";
import { motion } from "framer-motion";
import { Box, Flex, VStack, Image, Switch, Text } from "@chakra-ui/react";
import { Profile } from "./Components/profile";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Contact } from "./Components/Contact";
import { useContext, useEffect, useRef, useState } from "react";
import { AiFillContacts, AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { AppContex } from "./Context/Authcontext";
import Simple from "./Components/Navbar";



function App() {
  const { theme, setTheme, ToggleTheme } = useContext(AppContex);
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
