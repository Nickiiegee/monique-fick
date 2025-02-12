import Gravatar from "react-gravatar";
import styles from "./styles.module.css";
import { Box, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialObjects } from "./TestimonialList";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Typography
        variant="h6"
        className={styles.about_h5}
        sx={{
          marginTop: "8rem",
          textAlign: "center",
          color: " rgba(187, 199, 253, 0.89)",
        }}
      >
        My colleagues'
      </Typography>
      <Typography
        variant="h2"
        className={styles.about_h2}
        sx={{
          marginBottom: "3rem",
          textAlign: "center",
          color: " rgba(3, 118, 250, 0.925)",
          textShadow: "2px 2px #000000",
        }}
      >
        Testimonials
      </Typography>
      <Swiper
        className={styles.testimonials_container}
        spaceBetween={100}
        navigation
        modules={[Navigation]}
      >
        {testimonialObjects.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className={styles.testimonial}
              sx={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box className={styles.client_avatar}>
                <Gravatar email={avatar} default="monsterid" size={65} />
              </Box>
              <Typography
                className={styles.client_review}
                sx={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "1rem auto 2rem",
                }}
              >
                {review}
              </Typography>
              <Typography
                className={styles.client_name}
                sx={{
                  textAlign: "center",
                  margin: "1rem auto 2rem",
                }}
              >
                {name}
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
