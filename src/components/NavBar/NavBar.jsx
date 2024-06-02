import React, { useState } from "react";
import styles from "../../css/cssModules/NavBar.module.css";
import NavItem from "./NavItem";
import MobileNavToggle from "./MobileNavToggle";

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems = [
    { href: "#top", label: "Back to the top" },
    { href: "#Ammo", label: "Ammo" },
    { href: "#armor", label: "Armour" },
    { href: "#ashes", label: "Ashes Of War" },
    { href: "#bosses", label: "Bosses" },
    { href: "#classes", label: "Classes" },
    { href: "#creatures", label: "Creature" },
    { href: "#incantations", label: "Incantations" },
    { href: "#items", label: "Items" },
    { href: "#location", label: "Locations" },
    { href: "#npc", label: "Npc" },
    { href: "#shields", label: "Shields" },
    { href: "#sorceries", label: "Sorceries" },
    { href: "#spirit", label: "Spirits" },
    { href: "#talismans", label: "Talismans" },
    { href: "#weapons", label: "Weapons" },
  ];

  return (
    <nav className={styles.nav}>
      <MobileNavToggle
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isOpen={isMobileNavOpen}
      />

      <ul className={styles.desktopNav}>
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} label={item.label} />
        ))}
      </ul>

      <ul
        className={`${styles.mobileNav} ${
          !isMobileNavOpen && styles.mobileNavClosed
        }`}
      >
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
