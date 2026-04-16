"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ZestawySlider.module.css";

import zestaw1Img from "../../img/zestaw1.jpg";
import zestaw2Img from "../../img/zestaw2.jpg";
import zestaw3Img from "../../img/zestaw3.jpg";
import zestaw4Img from "../../img/zestaw4.jpg";
import zestaw5Img from "../../img/zestaw5.jpg";
import zestaw6Img from "../../img/zestaw6.jpg";
import zestaw7Img from "../../img/zestaw7.jpg";
import zestaw8Img from "../../img/zestaw8.jpg";

export default function ZestawySlider({ className = "" }) {
  const images = useMemo(
    () => [
      { src: zestaw1Img, alt: "Zestaw 1" },
      { src: zestaw2Img, alt: "Zestaw 2" },
      { src: zestaw3Img, alt: "Zestaw 3" },
      { src: zestaw4Img, alt: "Zestaw 4" },
      { src: zestaw5Img, alt: "Zestaw 5" },
      { src: zestaw6Img, alt: "Zestaw 6" },
      { src: zestaw7Img, alt: "Zestaw 7" },
      { src: zestaw8Img, alt: "Zestaw 8" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className={`${styles.slider} ${className}`}>
      {images.map((img, idx) => (
        <div
          key={img.alt}
          className={`${styles.slide} ${idx === activeIndex ? styles.active : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className={styles.image}
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  );
}

