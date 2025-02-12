"use client";
import ME from "@/src/assets/me_about.jpg";
import styles from "./styles.module.css";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { BiGitBranch } from "react-icons/bi";
import { FaAward, FaUsers } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { aboutList } from "./AboutList";

const About = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const paragraph =
    "As a self-taught Full Stack Developer landing my first career in IT at Autumn Leaf IT, I am results-driven with expertise in both front-end and back-end technologies. Proficient in building and optimizing web applications using modern frameworks such as React, TypeScript and Nextjs. Experienced with both MySQL and NoSQL databases as well as implementing RESTful API's and integrating third-party services. Strong problem-solving skills, attention to detail, and a passion for creating seamless, user-centric solutions. Able to work in fast-paced environments and collaborate effectively with cross-functional teams to deliver high-quality software.";

  return (
    <section id="about">
      <Typography
        variant="h6"
        sx={{
          marginTop: "8rem",
          textAlign: "center",
          color: " rgba(187, 199, 253, 0.89)",
        }}
      >
        Get to know me a little more
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "3rem",
          textAlign: "center",
          color: " rgba(3, 118, 250, 0.925)",
          textShadow: "2px 2px #000000",
        }}
      >
        About Me
      </Typography>

      <Box
        className={styles.about_container}
      >
        <Box className={styles.about_me}>
          <Box className={styles.about_me_image}>
            <Image
              src={ME}
              alt="About Image"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box className={styles.about_content}>
          <Box className={styles.about_cards}>
            {aboutList.map(({ category, detail }, idx) => {
              return (
                <Paper
                  className={styles.about_card}
                  key={idx}
                  sx={{
                    background: "rgba(0, 73, 156, 0.925)",
                    borderRadius: "1rem",
                    "&:hover": {
                      transition: "all 300ms ease",
                    },
                  }}
                >
                  {category === "Education" ? (
                    <MdSchool className={styles.about_icon} />
                  ) : category === "IT Experience" ? (
                    <FaAward className={styles.about_icon} />
                  ) : category === "Skills" ? (
                    <FaUsers className={styles.about_icon} />
                  ) : (
                    <BiGitBranch className={styles.about_icon} />
                  )}
                  <Typography>{category}</Typography>
                  <Typography
                    className={styles.about_card_small}
                    sx={{ fontSize: "12px" }}
                  >
                    {detail}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
          <Typography className={styles.about_content_p}>
            {paragraph}
          </Typography>
          <Box className={styles.btn_container}>
            <Link href="#contact" className={styles.btn}>
              Let's Talk
            </Link>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
