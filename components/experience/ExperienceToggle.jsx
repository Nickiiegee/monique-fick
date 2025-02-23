"use client";
import styles from "./styles.module.css";
import { Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import IT_Experience from "./IT_Experience";
import OtherExperience from "./Other_Experience";

const ExperienceToggle = () => {
  const [check, setCheck] = useState(false);

  return (
    <section id="experience">
      <Typography
        variant="h2"
        className={styles.experience_h2}
        sx={{
          marginBottom: "2rem",
          textAlign: "center",
          color: " rgba(3, 118, 250, 0.925)",
          textShadow: "2px 2px #000000",
          marginTop: '8rem',
          textShadow: '2px 2px #000000'
        }}
      >
        Experience | Qualifications
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography sx={{ color: "white" }}>IT Experience</Typography>
        <Switch onChange={() => setCheck(!check)} value={check} />
        <Typography sx={{ color: "white" }}>Other Experience</Typography>
      </Stack>
      {check ? <OtherExperience /> : <IT_Experience />}
    </section>
  );
};

export default ExperienceToggle;
