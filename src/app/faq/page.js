import Navbar from "../components/Navbar";
import styles from "./page.module.css";

const faqSections = [
  {
    id: "platnosc-nie-zrealizowana",
    title: "Płatność nie została zrealizowana",
    items: [
      "Prosimy spróbować ponownie.",
      "W przypadku płatności kartą – zalecamy skorzystanie z płatności BLIK.",
      "W przypadku płatności BLIK – prosimy spróbować zapłacić kartą.",
    ],
  },
  {
    id: "dlugi-czas-autoryzacji",
    title: "Długi czas oczekiwania na autoryzację płatności",
    items: [
      "Prosimy odczekać do 3 minut – po tym czasie transakcja zostanie automatycznie anulowana i będzie można podjąć kolejną próbę.",
      "Należy skorzystać z opcji „Otwórz ponownie szafkę” dostępnej na ekranie.",
      "W przypadku dalszych trudności prosimy o kontakt z właścicielem automatu (numer telefonu znajduje się na urządzeniu).",
    ],
  },
  {
    id: "drzwiczki-nie-otwieraja-sie",
    title:
      "Szafka została odblokowana, ale drzwiczki nie otwierają się prawidłowo",
    items: [
      "Prosimy delikatnie poruszyć klamką w celu odblokowania mechanizmu – bez użycia nadmiernej siły, aby uniknąć uszkodzenia urządzenia.",
      "Zalecamy ponowne użycie opcji „Otwórz ponownie szafkę”.",
      "Jeśli problem nie ustępuje, prosimy o kontakt z właścicielem automatu.",
    ],
  },
  {
    id: "ekran-dotykowy",
    title: "Ekran dotykowy nie reaguje prawidłowo",
    items: [
      "Prosimy zdjąć rękawiczki, jeśli są używane.",
      "Zalecamy osuszenie lub przetarcie palców – niektóre kosmetyki mogą wpływać na działanie ekranu.",
      "Ekran należy obsługiwać lekkim, krótkim dotknięciem – podobnie jak w przypadku smartfona (bez użycia siły i długiego przytrzymywania).",
    ],
  },
  {
    id: "uszkodzenie-automatu",
    title: "Uszkodzenie automatu",
    items: [
      "W przypadku przypadkowego uszkodzenia urządzenia (np. pęknięcia szyby), prosimy nie oddalać się z miejsca zdarzenia.",
      "Należy niezwłocznie skontaktować się z właścicielem automatu w celu zgłoszenia sytuacji – w przypadku zdarzeń losowych nie są wyciągane konsekwencje wobec użytkownika.",
      "Urządzenie może być objęte monitoringiem, co ułatwia wyjaśnienie okoliczności zdarzenia.",
    ],
  },
];

export default function FAQ() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Najczęściej zadawane pytania</h1>
        <div className={styles.content}>
          {faqSections.map((section) => (
            <details
              key={section.id}
              className={styles.item}
              open={section.id === "pomoc"}
            >
              <summary className={styles.summary}>{section.title}</summary>
              {section.items.length > 0 && (
                <ul className={styles.list}>
                  {section.items.map((text) => (
                    <li key={text} className={styles.listItem}>
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
