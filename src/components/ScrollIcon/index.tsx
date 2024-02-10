import React from "react";
import styles from './ScrollIcon.module.scss'

const ScrollIcon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        {/* <div className={styles.mouse}></div> */}
        <div className={styles.scroll}></div>
        {/* <div className={styles.arrow}></div> */}
      </div>
    </div>
  );
};

export default ScrollIcon;
