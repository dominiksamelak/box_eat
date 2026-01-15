import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function ZamowOnline() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Zamów online</h1>
        <div className={styles.content}>
          <p>Order online page content will go here.</p>
        </div>
      </main>
    </div>
  );
}
