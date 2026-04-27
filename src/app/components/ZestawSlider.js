"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import zestaw1Img from "../../img/zestaw1.jpg";
import zestaw2Img from "../../img/zestaw2.jpg";
import zestaw3Img from "../../img/zestaw3.jpg";
import zestaw4Img from "../../img/zestaw4.jpg";
import zestaw5Img from "../../img/zestaw5.jpg";
import zestaw6Img from "../../img/zestaw6.jpg";
import zestaw7Img from "../../img/zestaw7.jpg";
import zestaw8Img from "../../img/zestaw8.jpg";

const SLIDE_INTERVAL_MS = 3000;
const FADE_DURATION_MS = 650;

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

export default function ZestawSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setNextIndex((startIndex + 2) % slides.length);
      setIsFading(true);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [startIndex]);

  useEffect(() => {
    if (!isFading) {
      return undefined;
    }

    const fadeTimer = setTimeout(() => {
      setStartIndex(nextIndex);
      setIsFading(false);
    }, FADE_DURATION_MS);

    return () => clearTimeout(fadeTimer);
  }, [isFading, nextIndex]);

  const currentSlides = useMemo(
    () => [slides[startIndex], slides[(startIndex + 1) % slides.length]],
    [startIndex]
  );

  const upcomingSlides = useMemo(
    () => [slides[nextIndex], slides[(nextIndex + 1) % slides.length]],
    [nextIndex]
  );

  return (
    <section
      className={styles.zestawSliderViewport}
      aria-label="Slider zestawów sushi"
    >
      <div
        className={`${styles.zestawSliderTrack} ${styles.zestawCurrentTrack} ${
          isFading ? styles.trackHidden : styles.trackVisible
        }`}
      >
        {currentSlides.map((slide, index) => (
          <div className={styles.zestawCard} key={`current-${slide.src}-${index}`}>
            <Image
              src={slide}
              alt={`Zestaw sushi ${(startIndex + index) % slides.length + 1}`}
              width={slide.width}
              height={slide.height}
              className={styles.zestawImage}
              priority={startIndex === 0}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.zestawSliderTrack} ${styles.zestawNextTrack} ${
          isFading ? styles.trackVisible : styles.trackHidden
        }`}
        aria-hidden={!isFading}
      >
        {upcomingSlides.map((slide, index) => (
          <div className={styles.zestawCard} key={`next-${slide.src}-${index}`}>
            <Image
              src={slide}
              alt=""
              width={slide.width}
              height={slide.height}
              className={styles.zestawImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
