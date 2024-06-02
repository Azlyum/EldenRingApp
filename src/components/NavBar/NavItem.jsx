import React from "react";
import styles from "../../css/cssModules/NavItem.module.css";

const NavItem = ({ href, label }) => (
  <li className={styles.navItem}>
    <a href={href}>{label}</a>
  </li>
);

export default NavItem;
