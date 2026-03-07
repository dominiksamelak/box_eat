import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import maszynaImg from "../../img/maszyna-szczepankowo.jpg";

export default function ZnajdzAutomat() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Znajdź automat</h1>
        <div className={styles.content}>
          <div className={styles.mapAndPhoto}>
            <div className={styles.mapSection}>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.56205491895105!2d16.995599148762526!3d52.36142232409025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b04863f2f83%3A0x60a8b2a74d14d2fb!2sSushi%20Tokyo%20-%20Pozna%C5%84%20-%20Sushi%20Bar%20-%20Sushi%20z%20dostaw%C4%85.!5e0!3m2!1spl!2spl!4v1772902525349!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Znajdź automat"
              />
            </div>
            <div className={styles.photoSection}>
              <Image
                src={maszynaImg}
                alt="Automat vendingowy BOX EAT - Szczepankowo"
                fill
                className={styles.vendingPhoto}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
