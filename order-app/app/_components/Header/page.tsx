import React from "react";
import styles from "./page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Food</div>
            <nav className={styles.nav}>
                <span>Home</span>
                <span>Menu</span>
                <span>Contact</span>
            </nav>
        </header>
    );
}
