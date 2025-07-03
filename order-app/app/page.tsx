"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const messages = [
  "Crave it, Click it, Getit",
  "Skip the Line, Not the Meal",
  "Order Your Favorites",
  "Fast Food, Faster Delivery",
  "Your Food, Your Way",
];

export default function Page() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{messages[index]}</h2>
    </main>
  );
}