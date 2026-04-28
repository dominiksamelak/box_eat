import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import ImageDownloadGuard from "./components/ImageDownloadGuard";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BOX EAT - Świeże Sushi i Gotowe Posiłki 24/7",
  description: "Inteligentny vending premium. Odbierz zestaw w 15 sekund",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ImageDownloadGuard />
        <PageTransition>
          <div className="siteContent">{children}</div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
