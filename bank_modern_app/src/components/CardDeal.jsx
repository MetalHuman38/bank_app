import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover the Best Card <br className="sm:block hidden" />
        Deal in Just a Few Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Why settle for less when you can have the best? Our intuitive platform
        guides you through a hassle-free journey, comparing various card offers
        to find the one that aligns perfectly with your needs. Get started, save
        more, and maximize your benefits.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
