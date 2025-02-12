import styles from "./styles.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProjectList } from "./ProjectList";

const Projects = () => {
  return (
    <section id="projects">
      <Typography
        variant="h6"
        className={styles.projects_h5}
        sx={{
          marginTop: "8rem",
          textAlign: "center",
          color: " rgba(187, 199, 253, 0.89)",
        }}
      >
        Take a look at some of
      </Typography>
      <Typography
        variant="h2"
        className={styles.projects_h2}
        sx={{
          marginBottom: "3rem",
          textAlign: "center",
          color: " rgba(3, 118, 250, 0.925)",
          textShadow: "2px 2px #000000",
        }}
      >
        My Work
      </Typography>

      <Box className={styles.projects_container}>
        {ProjectList.map(({ id, title, description, image, link }) => {
          return (
            <Paper
              key={id}
              className={styles.project_item}
              sx={{
                background: "rgba(0, 73, 156, 0.925)",
                padding: "1.5rem",
                borderRadius: " 1.5rem",
                border: "1px solid transparent",
                transition: "all 500ms ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box className={styles.project_image}>
                <Image src={image} alt={title} width={3200} height={200} />
              </Box>
              <Typography
                className={styles.project_item_title}
                sx={{
                  margin: "1rem 0 0.5rem",
                  color: "white",
                  fontSize: "1.2rem",
                }}
              >
                {title}
              </Typography>
              <Typography
                className={styles.project_item_description}
                sx={{
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6",
                }}
              >
                {description}
              </Typography>
              <Box className={styles.project_item_info}>
                <Link href={link} className={styles.project_item_info_link}>
                  Visit Project
                </Link>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </section>
  );
};

export default Projects;
