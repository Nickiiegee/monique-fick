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
            {duties.map(({ title, duty }, index) => {
              return (
                <Box className={styles.experience_content} key={index}>
                  <Paper
                    className={styles.experience_details}
                    elevation={0}
                    sx={{ backgroundColor: "transparent" }}
                  >
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
                              sx={{ listStyleType: "disc", display: 'list-item' }}
                            >
                              {item}
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </Paper>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default OtherExperience;
