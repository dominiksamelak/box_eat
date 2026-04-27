import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import ZestawSlider from "./components/ZestawSlider";
import vendingImg from "../img/vending.png";
import boxtokyoImg from "../img/boxtokyo.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.headline}>
            ŚWIEŻE SUSHI I GOTOWE POSIŁKI 24/7
          </h1>
          <ZestawSlider />
          <section className={styles.boxTokyoSection}>
            <Image
              src={boxtokyoImg}
              alt="BOX TOKYO"
              width={boxtokyoImg.width}
              height={boxtokyoImg.height}
              className={styles.boxTokyoImage}
            />
          </section>
          <div className={styles.slogan}>
            <span className={styles.sloganText}>
              BOX EAT – z miłości do jakości
            </span>
            <div className={styles.sloganLine}></div>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/menu" className={styles.ctaPrimary}>
              ZOBACZ MENU
            </Link>
            <Link href="/znajdz-automat" className={styles.ctaSecondary}>
              ZNAJDŹ AUTOMAT
            </Link>
          </div>
          <p className={styles.description}>
            Inteligentny vending premium.
            <br />
            Odbierz zestaw w 15 sekund
          </p>
          <div className={styles.showcase}>
            <p className={styles.infoText}>
              BOX EAT to nowoczesna koncepcja sprzedaży świeżych posiłków, która
              łączy technologię, jakość premium i pełną dostępność. Tworzymy
              miejsca, w których możesz sięgnąć po starannie przygotowane sushi i
              dania gotowe – szybko, wygodnie i bez kompromisów.
            </p>
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
        </div>

        {/*
        <div className={styles.veg}>
          <div className={styles.imageWrapper}>
            <Image
              src={vegImg}
              alt="Smartphone displaying BOX EAT mobile website"
              fill
              className={styles.heroImage}
            />
          </div>
        </div> */}
      </main>
    </div>
  );
}
