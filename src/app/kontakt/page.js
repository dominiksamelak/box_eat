import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export default function Kontakt() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Kontakt</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            Masz pytanie, sugestię albo chcesz postawić automat BOX EAT w swojej
            lokalizacji?
          </p>
          <p className={styles.paragraph}>Jesteśmy do Twojej dyspozycji.</p>
          <p className={styles.paragraph}>
            Dbamy o jakość, świeżość i sprawną obsługę - dlatego każda wiadomość
            trafia do właściwej osoby.
          </p>
          <p className={styles.paragraph}>Skontaktuj się z nami:</p>
          <div className={styles.card}>
            <div className={styles.row}>
              <span className={styles.label}>Telefon</span>
              <a className={styles.value} href="tel:+48539341629">
                +48 539 341 629
              </a>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>E-mail</span>
              <a className={styles.value} href="mailto:kontakt@boxeat.pl">
                kontakt@boxeat.pl
              </a>
            </div>
          </div>
          <p className={styles.paragraph}>
            Lub skorzystaj z formularza kontaktowego.
          </p>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
