import ME from "@/src/assets/Monique.jpg";
import styles from "./styles.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles.header_container}>
        <Typography variant="h6" sx={{ marginBottom: "0.7rem" }}>
          Hello World, I'm
        </Typography>
        <Typography variant="h2" sx={{ marginBottom: "3rem" }}>
          Monique Fick
        </Typography>
        <ReactTyped
          className="typed-text"
          strings={[
            "Software Engineer",
            "Code Sourcerer",
            "Bug Killer",
            "Aspiring DevOps Engineer",
            "Button Pressing Expert",
            "Coffee Addict",
            "Professional Stack Overflow Researcher",
            "Code Monkey",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <Image src={ME} alt="me" />
        </div>
      </Box>
    </Box>
  );
};

export default Header;
