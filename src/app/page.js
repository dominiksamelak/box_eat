import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import sushiBoxImg from "../img/sushi-box.png";
import vegImg from "../img/veg.png";
import vendingImg from "../img/vending.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.headline}>
            ŚWIEŻE SUSHI I GOTOWE POSIŁKI 24/7
          </h1>
          <div className={styles.slogan}>
            <span className={styles.sloganText}>
              BOX EAT – z miłości do jakości
            </span>
            <div className={styles.sloganLine}></div>
          </div>
          <p className={styles.description}>
            Inteligentny vending premium. Odbierz zestaw w 15 sekund
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/menu" className={styles.ctaPrimary}>
              ZOBACZ MENU
            </Link>
            <Link href="/znajdz-automat" className={styles.ctaSecondary}>
              ZNAJDŹ AUTOMAT
            </Link>
          </div>
        </div>

        <div className={styles.veg}>
          <div className={styles.imageWrapper}>
            <Image
              src={vegImg}
              alt="Smartphone displaying BOX EAT mobile website"
              fill
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.visualElements}>
          <div className={styles.sushiBox}>
            <div className={styles.imageWrapper}>
              <Image
                src={sushiBoxImg}
                alt="Sushi platter with various sushi pieces, nigiri, maki rolls, and inari sushi"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className={styles.heroImage}
              />
            </div>
          </div>

          <div className={styles.vendingMachine}>
            <Image
              src={vendingImg}
              alt="Dark green vending machine with BOX EAT branding"
              width={vendingImg.width}
              height={vendingImg.height}
              className={styles.vendingImage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
