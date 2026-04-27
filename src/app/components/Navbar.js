"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 768);
      setNavHeight(el.offsetHeight);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    const ro = new ResizeObserver(updateLayout);
    ro.observe(el);

    return () => {
      window.removeEventListener("resize", updateLayout);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (!isMobile) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (isOpen) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      const scrollingDown = currentY > lastScrollY.current + 6;
      const scrollingUp = currentY < lastScrollY.current - 6;

      if (scrollingDown && currentY > 80) {
        setIsHidden(true);
      } else if (scrollingUp || currentY <= 10) {
        setIsHidden(false);
      }

      lastScrollY.current = Math.max(currentY, 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile, isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""} ${
          isHidden ? styles.navbarHidden : ""
        }`}
      >
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
      <div className={styles.navbarSpacer} style={{ height: navHeight }} />
    </>
  );
}
