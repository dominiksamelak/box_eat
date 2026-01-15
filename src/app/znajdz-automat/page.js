import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function ZnajdzAutomat() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Znajdź automat</h1>
        <div className={styles.content}>
          <p>Find machine page content will go here.</p>
        </div>
      </main>
    </div>
  );
}
