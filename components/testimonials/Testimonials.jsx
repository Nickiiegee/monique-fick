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
      <Typography variant="h6" className={styles.about_h5}>
        My colleagues'
      </Typography>
      <Typography variant="h2" className={styles.about_h2}>
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
            <SwiperSlide key={index} className={styles.testimonial}>
              <Box className={styles.client_avatar}>
                <Gravatar email={avatar} default="monsterid" size={65} />
              </Box>
              <Typography className={styles.client_review}>{review}</Typography>
              <Typography className={styles.client_name}>{name}</Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
