import styles from "./styles.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProjectList } from "./ProjectList";

const Projects = () => {
  return (
    <section id="projects">
      <Typography variant="h6" className={styles.projects_h5}>
        Take a look at some of
      </Typography>
      <Typography variant="h2" className={styles.projects_h2}>
        My Work
      </Typography>

      <Box className={styles.projects_container}>
        {ProjectList.map(({ id, title, description, image, link }) => {
          return (
            <Paper key={id} className={styles.project_item}>
              <Box className={styles.project_image}>
                <Image src={image} alt={title} width={3200} height={200} />
              </Box>
              <Typography className={styles.project_item_title}>
                {title}
              </Typography>
              <Typography className={styles.project_item_description}>
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
