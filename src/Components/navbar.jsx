import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import "../App.css";
import {
  border,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";

export const Navbar = () => {
  const [show,setShow]=useState(false)
  return (
    <>
      <div className="maindiv">
        <h2 className="logo">Janhavi </h2>
        <div className="leftdiv">
          <div>
            {" "}
            <Link to={"/"}>
              <h2>Work</h2>
            </Link>
          </div>
          <div>
            {" "}
            <Link to={"/about"}>
              <h2>About</h2>
            </Link>{" "}
          </div>
          <div>
            <Link to={"/skills"}>
              <h2>Skills</h2>
            </Link>
          </div>
          <div>
            <Link to={"/contact"}>
              <h2>Contact</h2>
            </Link>
          </div>
        </div>
        <div className="rightdiv">
          <div>View CV</div>
        </div>
        <div className="hamburgericon" onClick={() => setShow(!show)}>
          <Menu bg={"rgb(248 206 254)"}>
            <MenuButton
              bg={"rgb(248 206 254)"}
              _hover={{ bg: "rgb(248 206 254)" }}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
            />
            <MenuList bg="rgb(248 206 254)" width={40}>
              <MenuItem
                _hover={{
                  bg: "rgb(248 206 254)",
                  border: "1px solid purple",
                }}
              >
                <Link to={"/"}>Work</Link>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "rgb(248 206 254)",
                  border: "1px solid purple",
                }}
              >
                <Link to={"/about"}>About</Link>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "rgb(248 206 254)",
                  border: "1px solid purple",
                }}
              >
                <Link to={"/skills"}>Skills</Link>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "rgb(248 206 254)",
                  border: "1px solid purple",
                }}
              >
                <Link to={'/contact'} >Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};
