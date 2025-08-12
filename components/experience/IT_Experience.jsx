import styles from "./styles.module.css";
import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { FaRegCheckCircle } from "react-icons/fa";
import { ITExperienceList } from "./ExperienceList";

const IT_Experience = () => {
  return (
    <Box className={styles.experience_container}>
      {ITExperienceList.map(({ title, dutyList, id }) => {
        return (
          <Box key={id}>
            <Typography variant="h3">{title}</Typography>
            {dutyList.map(({ role, duties }, idx) => {
              return (
                <Box className={styles.experience_content} key={idx}>
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
                        {role}
                      </Typography>
                      {duties ? (
                        <List sx={{ listStyleType: "disc" }}>
                          {duties.map((duty, index) => {
                            return (
                              <ListItem
                                className={styles.experience_details_small}
                                key={index}
                                sx={{ listStyleType: "disc", display: 'list-item' }}
                              >
                                {duty}
                              </ListItem>
                            );
                          })}
                        </List>
                      ) : (
                        <></>
                      )}
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

export default IT_Experience;
