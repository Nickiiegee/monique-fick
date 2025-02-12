import styles from "./styles.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <Typography variant="h5" className={styles.contact_h5}>
        Want To Talk?
      </Typography>
      <Typography variant="h2" className={styles.contact_h2}>
        Contact Me
      </Typography>
      <Box className={styles.contact_container}>
        <Box className={styles.contact_options}>
          <Link
            href="mailto:monique.geldenhuys@gmail.com"
            target="_blank"
            className={styles.contact_option}
          >
            <Paper sx={{ background: "transparent" }} elevation={0}>
              <AiOutlineMail className={styles.socials} />
              <Typography
                variant="h4"
                sx={{ color: "white", fontSize: "20px", mt: "4px" }}
              >
                Email
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", fontSize: "14px", mt: "8px" }}
              >
                monique.geldenhuys@gmail.com
              </Typography>
            </Paper>
          </Link>

          <Link
            href="https://www.linkedin.com/in/monique-fick-geldenhuys-2b67741b3/"
            target="_blank"
            className={styles.contact_option}
          >
            <Paper sx={{ background: "transparent" }} elevation={0}>
              <AiOutlineLinkedin className={styles.socials} />
              <Typography
                variant="h4"
                sx={{ color: "white", fontSize: "20px", mt: "4px" }}
              >
                LinkedIn
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", fontSize: "14px", mt: "8px" }}
              >
                linkedin.com/Monique-Fick
              </Typography>
            </Paper>
          </Link>

          <Link
            href="https://wa.me/+27737462696"
            target="_blank"
            className={styles.contact_option}
          >
            <Paper sx={{ background: "transparent" }} elevation={0}>
              <RiWhatsappLine className={styles.socials} />
              <Typography
                variant="h4"
                sx={{ color: "white", fontSize: "20px", mt: "4px" }}
              >
                WhatsApp
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", fontSize: "14px", mt: "8px" }}
              >
                +2773-746-2696
              </Typography>
            </Paper>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
