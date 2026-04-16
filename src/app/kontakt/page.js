import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function Kontakt() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Kontakt</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            W razie jakichkolwiek kłopotów czy pytań, zapraszamy do kontaktu
          </p>
          <div className={styles.card}>
            <div className={styles.row}>
              <span className={styles.label}>Numer telefonu</span>
              <a className={styles.value} href="tel:+48539341629">
                +48 539 341 629
              </a>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Adres e-mail</span>
              <a className={styles.value} href="mailto:pomoc@box-eat.pl">
                pomoc@box-eat.pl
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
