import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function Kontakt() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Kontakt</h1>
        <div className={styles.content}>
          <p>Contact page content will go here.</p>
        </div>
      </main>
    </div>
  );
}
