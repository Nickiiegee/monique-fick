import styles from "./styles.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography>
        <Link href="#" className={styles.footer_logo}>
          Monique Fick
        </Link>
        Copyright: 2025
      </Typography>
    </Box>
  );
};

export default Footer;
