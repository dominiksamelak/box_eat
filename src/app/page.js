import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import ZestawGridSlider from "./components/ZestawGridSlider";
import sushiMainImg from "../img/sushi-main.jpg";
import vendingNightImg from "../img/vending_noc.jpg";
import clockImg from "../img/clockpng.png";
import sushiIconImg from "../img/sushi.png";
import fishImg from "../img/fish.png";
import stampImg from "../img/stamp.png";
import choiceImg from "../img/choice.png";
import takeImg from "../img/take.png";
import tasteImg from "../img/taste.png";
import arrowImg from "../img/arrow.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.mainHome}>
        <section
          className={styles.heroSplit}
          aria-label="BOX EAT — główna grafika"
        >
          <div className={styles.heroSplitVisual}>
            <div className={styles.heroSplitImages}>
              <div className={styles.heroSplitCell}>
                <Image
                  src={sushiMainImg}
                  alt="Świeże sushi BOX EAT"
                  fill
                  sizes="50vw"
                  className={styles.heroSplitImg}
                  priority
                />
              </div>
              <div className={styles.heroSplitCell}>
                <Image
                  src={vendingNightImg}
                  alt="Automat vending BOX EAT nocą"
                  fill
                  sizes="50vw"
                  className={styles.heroSplitImg}
                  priority
                />
              </div>
            </div>
            <div className={styles.heroSplitOverlay}>
              <div className={styles.heroSplitTextBlock}>
                <h1 className={styles.heroSplitTitle}>
                  ŚWIEŻE SUSHI I GOTOWE POSIŁKI 24/7
                </h1>
                <p className={styles.heroSplitTagline}>
                  Inteligentny vending premium.
                  <br />
                  Odbierz zestaw w 15 sekund
                </p>
              </div>
            </div>
          </div>
          <div className={styles.heroSplitCtas}>
            <Link href="/menu" className={styles.ctaPrimary}>
              ZOBACZ MENU
            </Link>
            <Link href="/znajdz-automat" className={styles.ctaSecondary}>
              ZNAJDŹ AUTOMAT
            </Link>
          </div>
        </section>

        <section
          className={styles.whySection}
          aria-labelledby="why-box-eat-heading"
        >
          <h2 id="why-box-eat-heading" className={styles.whyHeading}>
            Dlaczego BOX EAT?
          </h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyImagePanel}>
                <Image
                  src={clockImg}
                  alt="Zegar"
                  width={clockImg.width}
                  height={clockImg.height}
                  className={styles.whyIconImage}
                />
              </div>
              <p className={styles.whyCaption}>Odbiór w 15 sekund</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyImagePanel}>
                <Image
                  src={sushiIconImg}
                  alt="Sushi"
                  width={sushiIconImg.width}
                  height={sushiIconImg.height}
                  className={styles.whyIconImage}
                />
              </div>
              <p className={styles.whyCaption}>Świeże 24/7</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyImagePanel}>
                <Image
                  src={fishImg}
                  alt="Ryba"
                  width={fishImg.width}
                  height={fishImg.height}
                  className={styles.whyIconImage}
                />
              </div>
              <p className={styles.whyCaption}>Składniki premium</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyImagePanel}>
                <Image
                  src={stampImg}
                  alt="Pieczęć jakości"
                  width={stampImg.width}
                  height={stampImg.height}
                  className={styles.whyIconImage}
                />
              </div>
              <p className={styles.whyCaption}>Wygodnie i bez kompromisów</p>
            </div>
          </div>
        </section>

        <section
          className={styles.zestawHowSection}
          aria-labelledby="nasze-zestawy-heading jak-dziala-heading"
        >
          <div className={styles.zestawHowInner}>
            <div className={styles.zestawHowGrid}>
              <div className={styles.zestawHowLeft}>
                <h2
                  id="nasze-zestawy-heading"
                  className={styles.zestawHowSetTitle}
                >
                  Nasze zestawy
                </h2>
                <ZestawGridSlider />
              </div>
              <div className={styles.zestawHowRight}>
                <h2 id="jak-dziala-heading" className={styles.howTitle}>
                  Jak to działa
                </h2>
                <p className={styles.howIntro}>
                  BOX EAT to nowoczesna koncepcja sprzedaży świeżych posiłków,
                  która łączy technologię, jakość premium i pełną dostępność.
                  Tworzymy miejsca, w których możesz sięgnąć po starannie
                  przygotowane sushi i dania gotowe – szybko, wygodnie i bez
                  kompromisów.
                </p>
                <div className={styles.howStepsGrid}>
                  <div
                    className={`${styles.howIconCell} ${styles.howIconCol1}`}
                  >
                    <div className={styles.whyImagePanel}>
                      <Image
                        src={choiceImg}
                        alt="Wybierz"
                        width={choiceImg.width}
                        height={choiceImg.height}
                        className={styles.whyIconImage}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.howArrow} ${styles.howArrowCol2}`}
                    aria-hidden
                  >
                    <Image
                      src={arrowImg}
                      alt=""
                      width={arrowImg.width}
                      height={arrowImg.height}
                      className={styles.howArrowImg}
                    />
                  </div>
                  <div
                    className={`${styles.howIconCell} ${styles.howIconCol3}`}
                  >
                    <div className={styles.whyImagePanel}>
                      <Image
                        src={takeImg}
                        alt="Zabierz"
                        width={takeImg.width}
                        height={takeImg.height}
                        className={styles.whyIconImage}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.howArrow} ${styles.howArrowCol4}`}
                    aria-hidden
                  >
                    <Image
                      src={arrowImg}
                      alt=""
                      width={arrowImg.width}
                      height={arrowImg.height}
                      className={styles.howArrowImg}
                    />
                  </div>
                  <div
                    className={`${styles.howIconCell} ${styles.howIconCol5}`}
                  >
                    <div className={styles.whyImagePanel}>
                      <Image
                        src={tasteImg}
                        alt="Smakuj"
                        width={tasteImg.width}
                        height={tasteImg.height}
                        className={styles.whyIconImage}
                      />
                    </div>
                  </div>
                  <p
                    className={`${styles.whyCaption} ${styles.howCaption} ${styles.howCaptionCol1}`}
                  >
                    Wybierz
                  </p>
                  <p
                    className={`${styles.whyCaption} ${styles.howCaption} ${styles.howCaptionCol3}`}
                  >
                    Zabierz
                  </p>
                  <p
                    className={`${styles.whyCaption} ${styles.howCaption} ${styles.howCaptionCol5}`}
                  >
                    Smakuj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
