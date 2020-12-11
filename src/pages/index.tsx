import React, { FC } from "react";

import Letter from "../components/Letter/Letter";
import STYLES from "./index.module.scss";

const NAME = "Kate Hedgpeth";
const YEARS_EXPERIENCE = new Date().getFullYear() - 2014;

const IndexPage: FC = () => {
  return (
    <div className={STYLES.body}>
      <header>
        <h1 className={STYLES.header}>
          Hi, I'm{" "}
          {NAME.split("").map((letter, i) => (
            <Letter letter={letter} key={`${letter}-${i}`} />
          ))}
          .
        </h1>
      </header>
      <section className={STYLES.description}>
        <p>
          I am a full-stack software engineer with {YEARS_EXPERIENCE} years of
          experience in development, plus over 10 years of experience in UX
          design before that. I am passionate about creating great products with
          great experiences.
        </p>

        <p>
          When I'm not working, I enjoy cooking, running, camping, bird
          watching, and being outdoors.
        </p>

        <p>
          If you'd like to get in touch, contact me at{" "}
          <span className={STYLES.email}>kate@katehedgpeth.com</span>.
        </p>
      </section>
    </div>
  );
};

export default IndexPage;
