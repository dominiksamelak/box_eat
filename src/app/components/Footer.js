import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/znajdz-automat", label: "Znajdź automat" },
  { href: "/biznes", label: "Biznes" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/zamow-online", label: "Zamów online" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoBox}>BOX</span> EAT
        </Link>
        <nav className={styles.links} aria-label="Linki w stopce">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

