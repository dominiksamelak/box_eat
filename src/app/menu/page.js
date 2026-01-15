import Navbar from "../components/Navbar";
import styles from "./page.module.css";

export default function Menu() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>
        <div className={styles.content}>
          <p>Menu page content will go here.</p>
        </div>
      </main>
    </div>
  );
}
