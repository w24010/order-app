"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const messages = [
  "Crave it, Click it, Get it",
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
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div
          className={styles.bg}
          style={{
            backgroundImage: "url('/burger.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "600px 600px",
            backgroundPosition: "center",
          }}
        >
          <h2 className={styles.title}>{messages[index]}</h2>
          <p className={styles.des1}>
            Craving something delicious? Get your Favorites Meals <br />
            delivered Fast and Fresh with just one tap. <br />
            From local favorites to global flavours,
            <br />
            we bring it all to your doorstep -quick,
            <br />
            easy and hassle-free.
          </p>
          <div className={styles.order}>
            <button className={styles.btn}>Order Now</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/burger.jpg"
          alt="Food Delivery"
          className={styles.img1}
          width={300}
          height={200}
        />
        <Image
          src="/Risotto.jpg"
          alt="Food Delivery"
          className={styles.img2}
          width={300}
          height={200}
        />
        <Image
          src="/Ramen.jpg"
          alt="Food Delivery"
          className={styles.img3}
          width={300}
          height={200}
        />
      </div>
    </main>
  );
}