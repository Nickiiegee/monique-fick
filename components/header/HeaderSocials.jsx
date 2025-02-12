import styles from "./styles.module.css";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={styles.header_socials}>
      <a
        href="https://www.linkedin.com/in/monique-fick-geldenhuys-2b67741b3/"
        target="_blank"
        className={styles.socials}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/nickiiegee"
        target="_blank"
        className={styles.socials}
      >
        <FaGithubAlt />
      </a>
      <a
        href="https://wa.me/+27737462696"
        target="_blank"
        className={styles.socials}
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
