import styles from "./SubHeading.module.scss";

const SubHeading = ({ contents }) => {
  return <h2 className={styles.heading}>{contents}</h2>;
};

export default SubHeading;
