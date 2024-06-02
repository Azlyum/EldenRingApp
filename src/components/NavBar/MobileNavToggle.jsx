import React from "react";
import styles from "../../css/cssModules/MobileNavToggle.module.css";

const MobileNavToggle = ({ onClick, isOpen }) => (
  <button className={styles.toggleButton} onClick={onClick}>
    {isOpen ? "Close" : "Menu"}
  </button>
);
export default MobileNavToggle;
