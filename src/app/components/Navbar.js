"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoBox}>BOX</span> EAT
      </Link>
      <button
        type="button"
        className={styles.menuToggle}
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
      </button>
      <div
        className={`${styles.navLinks} ${
          isOpen ? styles.navLinksOpen : ""
        }`}
      >
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
