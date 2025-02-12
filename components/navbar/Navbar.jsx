import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import { FaHome, FaNetworkWired, FaUserAstronaut } from "react-icons/fa";
import styles from "./styles.module.css";
import { AppBar, Box, Link, Toolbar } from "@mui/material";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Box sx={{ flexGrow: 1 }} id="navbar">
      <AppBar position="fixed">
        <Toolbar>
          <Link
            href="#"
            className={
              activeNav === "#" ? styles.active : styles.navbar_inactive
            }
            onClick={() => {
              setActiveNav("#");
            }}
          >
            <FaHome />
          </Link>
          <Link
            href="#about"
            onClick={() => {
              setActiveNav("#about");
            }}
            className={
              activeNav === "#about" ? styles.active : styles.navbar_inactive
            }
          >
            <FaUserAstronaut />
          </Link>
          <Link
            href="#experience"
            onClick={() => {
              setActiveNav("#experience");
            }}
            className={
              activeNav === "#experience"
                ? styles.active
                : styles.navbar_inactive
            }
          >
            <BsBookFill />
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              setActiveNav("#projects");
            }}
            className={
              activeNav === "#projects" ? styles.active : styles.navbar_inactive
            }
          >
            <FaNetworkWired />
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setActiveNav("#contact");
            }}
            className={
              activeNav === "#contact" ? styles.active : styles.navbar_inactive
            }
          >
            <AiFillPhone />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
