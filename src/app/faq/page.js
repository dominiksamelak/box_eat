import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function FAQ() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>FAQ</h1>
        <div className={styles.content}>
          <p>Frequently Asked Questions page content will go here.</p>
        </div>
      </main>
    </div>
  );
}
