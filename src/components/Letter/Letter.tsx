import React, { FC, useEffect, useState } from "react";
import STYLES from "./Letter.module.scss";

interface Props {
  letter: string;
}

const MIN_OPACITY = 40;

const randomPercentage = () => {
  const num = Math.round(Math.random() * 100);
  return num > MIN_OPACITY ? num : MIN_OPACITY;
};

const Letter: FC<Props> = ({ letter }) => {
  const [opacity, setOpacity] = useState(randomPercentage());
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(randomPercentage());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span style={{ opacity: `${opacity}%` }} className={STYLES.letter}>
      {letter}
    </span>
  );
};

export default Letter;
