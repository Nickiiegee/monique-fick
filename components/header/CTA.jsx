import styles from "./styles.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      {/* <a href={CV} download className="btn">Download CV</a> */}
      <a href="#contact" className={styles.btn}>
        Let's Talk
      </a>
    </div>
  );
};
export default CTA;
