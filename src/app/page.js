import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

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
            <Link href="/menu" className={styles.ctaPrimary}>ZOBACZ MENU</Link>
            <Link href="/znajdz-automat" className={styles.ctaSecondary}>ZNAJDŹ AUTOMAT</Link>
          </div>
        </div>

        <div className={styles.visualElements}>
          <div className={styles.sushiBox}>
            <div className={styles.placeholder}>
              <p>Sushi Box Placeholder</p>
              <p className={styles.placeholderSubtext}>
                Image of sushi platter with various sushi pieces, nigiri, maki rolls, and inari sushi
              </p>
            </div>
          </div>

          <div className={styles.phone}>
            <div className={styles.placeholder}>
              <p>Mobile Phone Placeholder</p>
              <p className={styles.placeholderSubtext}>
                Image of smartphone displaying BOX EAT mobile website
              </p>
            </div>
          </div>

          <div className={styles.vendingMachine}>
            <div className={styles.placeholder}>
              <p>Vending Machine Placeholder</p>
              <p className={styles.placeholderSubtext}>
                Image of dark green vending machine with BOX EAT branding
              </p>
            </div>
          </div>

          <div className={styles.ingredients}>
            <div className={styles.ingredient}>Cucumber</div>
            <div className={styles.ingredient}>Chili</div>
            <div className={styles.ingredient}>Cilantro</div>
            <div className={styles.ingredient}>Edamame</div>
            <div className={styles.ingredient}>Lime</div>
          </div>
        </div>
      </main>
    </div>
  );
}
