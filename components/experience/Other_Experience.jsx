import styles from "./styles.module.css";
import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { FaRegCheckCircle } from "react-icons/fa";
import { otherExperienceList } from "./ExperienceList";

const OtherExperience = () => {
  return (
    <Box className={styles.experience_container}>
      {otherExperienceList.map(({ title, duties, id }) => {
        return (
          <Box key={id}>
            <Typography variant="h3">{title}</Typography>
            <Box className={styles.experience_content}>
              {duties.map(({ title, duty }, index) => {
                return (
                  <Paper className={styles.experience_details} elevation={0} key={index}>
                    <Box>
                      <Typography variant="h4">
                        <FaRegCheckCircle
                          className={styles.experience_details_icon}
                        />
                        {title}
                      </Typography>
                      <List sx={{ listStyleType: "disc" }}>
                        {duty.map((item, itemIndex) => {
                          return (
                            <ListItem
                              className={styles.experience_details_small}
                              key={itemIndex}
                            >
                              {item}
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default OtherExperience;
