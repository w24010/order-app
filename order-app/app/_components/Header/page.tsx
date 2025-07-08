"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";
import styles from "./page.module.css";

export default function Header() {
    const [show, setShow] = useState(true);
    const lastScroll = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll.current && currentScroll > 80) {
          setShow(false); // Hide on scroll down
        } else {
          setShow(true); // Show on scroll up
        }
        lastScroll.current = currentScroll;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [setShow]);

    // Close menu when resizing to desktop
    // Close menu when resizing to desktop
    useEffect(() => {
      const handleResize = () => {
        // No menu to close since menuOpen is removed
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Close menu when clicking a link (mobile UX)
  
  return (
    <header
      className={styles.header}
      style={{ transform: show ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s ease" }}
    >
      <div className={styles.logo}>FOOD</div>
      <nav className={styles.nav}>
        <span>Home</span>
        <span>Menu</span>
        <span>Contact</span>
      </nav>
    </header>
  );
}
