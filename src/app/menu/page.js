import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./page.module.css";
import zestaw1Img from "../../img/zestaw1.jpg";
import zestaw2Img from "../../img/zestaw2.jpg";
import zestaw3Img from "../../img/zestaw3.jpg";
import zestaw4Img from "../../img/zestaw4.jpg";
import zestaw5Img from "../../img/zestaw5.jpg";
import zestaw6Img from "../../img/zestaw6.jpg";
import zestaw7Img from "../../img/zestaw7.jpg";
import zestaw8Img from "../../img/zestaw8.jpg";

const zestawy = [
  {
    id: 1,
    name: "Sakura Classic",
    pieces: "17 kawałków",
    img: zestaw1Img,
    description: [
      "4 x maki tatar z łososia, ogórek, omlet",
      "4 x kalifornia łosoś awokado w sezamie",
      "4 x kalifornia krewetka, ogórek w koperku",
      "2 x maki łosoś, tuńczyk, dorada, rzepa w płatku sojowym",
      "3 x hosomaki tuńczyk",
    ],
    extras: "W zestawie sos sojowy, imbir, wasabi i pałeczki.",
  },
  {
    id: 2,
    name: "Tokyo Selection",
    pieces: "14 kawałków",
    img: zestaw2Img,
    description: [
      "6 x kalifornia maki krewetka, ogórek w koperku",
      "4 x kalifornia maki łosoś awokado w rukoli",
      "1 x nigiri łosoś marynowany ze szczypiorkiem",
      "1 x nigiri tuńczyk",
      "1 x nigiri dorada",
      "1 x nigiri tuńczyk TORO",
    ],
  },
  {
    id: 3,
    name: "Golden Teriyaki",
    pieces: "16 kawałków",
    img: zestaw3Img,
    description: [
      "4 x kalifornia maki krewetka, rzepa w sezamie",
      "4 x kalifornia maki łosoś, awokado w sezamie",
      "6 x łosoś zapiekany, tykwa w omlecie na słodko - sos Teriyaki",
      "2 x nigiri łosoś szczypiorek",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, sos Teriyaki, pałeczki.",
  },
  {
    id: 4,
    name: "Rainbow Fusion",
    pieces: "14 kawałków",
    img: zestaw4Img,
    description: [
      "6 x kalifornia krewetka, ogórek w koperku",
      "8 x rainbow roll z łososiem, tuńczykiem, doradą, surami, rzepą",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, pałeczki.",
  },
  {
    id: 5,
    name: "Salmon Love",
    pieces: "14 kawałków",
    img: zestaw5Img,
    description: [
      "6 x hosomaki łosoś zapiekany",
      "2 x kalifornia maki krewetka, tykwa w sezamie",
      "2 x kalifornia maki łosoś marynowany, szczypior",
      "2 x kalifornia farsz z surimi",
      "2 x nigiri łosoś z szczypiorkiem",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, pałeczki.",
  },
  {
    id: 6,
    name: "Ocean Mix",
    pieces: "14 kawałków",
    img: zestaw6Img,
    description: [
      "2 x maki łosoś, omlet, ogórek",
      "2 x kalifornia maki surimi, omlet, rzepa w sezamie",
      "2 x maki łosoś, tuńczyk, dorada, rzepa",
      "6 x hosomaki farsz z surimi",
      "2 x nigiri łosoś z szczypiorkiem",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, pałeczki.",
  },
  {
    id: 7,
    name: "Chef’s Choice",
    pieces: "15 sztuk",
    img: zestaw7Img,
    description: [
      "2 x maki dorada, ogórek, omlet",
      "3 x łosoś, tykwa w omlecie - sos Teriyaki",
      "3 x kalifornia maki łosoś marynowany, szczypiorek",
      "4 x hosomaki tuńczyk",
      "1 x nigiri łosoś z szczypiorkiem",
      "1 x nigiri tuńczyk",
      "1 x nigiri dorada",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, sos Teriyaki, pałeczki.",
  },
  {
    id: 8,
    name: "Veggie & Light",
    pieces: "14 kawałków",
    img: zestaw8Img,
    description: [
      "6 x hosomaki rzepa marynowana",
      "2 x maki krewetka, omlet, rzepa, szczypiorek",
      "2 x kalifornia maki surimi, łosoś w sezamie",
      "2 x nigiri łosoś z szczypiorkiem",
      "2 x nigiri tuńczyk",
    ],
    extras: "W zestawie sos sojowy, wasabi, imbir, pałeczki.",
  },
];

export default function Menu() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dostępne zestawy</h2>
          <div className={styles.grid}>
            {zestawy.map((zestaw) => (
              <article key={zestaw.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={zestaw.img}
                    alt={zestaw.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {zestaw.name}{" "}
                    <span className={styles.cardPieces}>{zestaw.pieces}</span>
                  </h3>
                  <ul className={styles.list}>
                    {zestaw.description.map((item) => (
                      <li key={item} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {zestaw.extras && (
                    <p className={styles.extras}>{zestaw.extras}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
