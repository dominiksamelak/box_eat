"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ZestawGridSlider.module.css";
import zestaw1Img from "../../img/zestaw1.jpg";
import zestaw2Img from "../../img/zestaw2.jpg";
import zestaw3Img from "../../img/zestaw3.jpg";
import zestaw4Img from "../../img/zestaw4.jpg";
import zestaw5Img from "../../img/zestaw5.jpg";
import zestaw6Img from "../../img/zestaw6.jpg";
import zestaw7Img from "../../img/zestaw7.jpg";
import zestaw8Img from "../../img/zestaw8.jpg";

const SLIDE_INTERVAL_MS = 3000;
const PAGE_SIZE = 4;

const slides = [
  zestaw1Img,
  zestaw2Img,
  zestaw3Img,
  zestaw4Img,
  zestaw5Img,
  zestaw6Img,
  zestaw7Img,
  zestaw8Img,
];

function pageSlides(start) {
  return [0, 1, 2, 3].map((i) => slides[(start + i) % slides.length]);
}

export default function ZestawGridSlider() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + PAGE_SIZE) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const cells = useMemo(() => pageSlides(startIndex), [startIndex]);

  return (
    <div className={styles.viewport} aria-label="Slider zestawów 2×2">
      <div className={styles.track}>
        {cells.map((slide, index) => (
          <div className={styles.card} key={`${startIndex}-${slide.src}-${index}`}>
            <Image
              src={slide}
              alt={`Zestaw ${(startIndex + index) % slides.length + 1}`}
              width={slide.width}
              height={slide.height}
              className={styles.image}
              sizes="(max-width: 768px) 45vw, 22vw"
              priority={startIndex === 0 && index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
