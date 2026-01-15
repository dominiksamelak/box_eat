import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        BOX EAT
      </Link>
      <div className={styles.navLinks}>
        <Link href="/menu">Menu</Link>
        <Link href="/znajdz-automat">Znajdź automat</Link>
        <Link href="/biznes">Biznes</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/zamow-online" className={styles.orderButton}>
          Zamów online
        </Link>
      </div>
    </nav>
  );
}
