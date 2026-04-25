"use client";

import { useState } from "react";
import styles from "./page.module.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Nie udalo sie wyslac wiadomosci.");
      }

      setStatus({
        type: "success",
        message: "Dziekujemy! Twoja wiadomosc zostala wyslana.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Wystapil blad podczas wysylki formularza.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>Imię i nazwisko *</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>E-mail *</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Telefon</span>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>Lokalizacja automatu</span>
          <input
            className={styles.input}
            type="text"
            name="location"
            value={form.location}
            onChange={onChange}
            placeholder="np. Warszawa, biurowiec, galeria handlowa"
          />
        </label>

        <label className={`${styles.field} ${styles.fieldWide}`}>
          <span className={styles.fieldLabel}>Wiadomość *</span>
          <textarea
            className={styles.textarea}
            name="message"
            value={form.message}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <div className={styles.actions}>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
        {status.message ? (
          <p
            className={`${styles.status} ${
              status.type === "success"
                ? styles.statusSuccess
                : styles.statusError
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
