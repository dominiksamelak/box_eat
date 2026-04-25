import { NextResponse } from "next/server";

const MAILJET_API_URL = "https://api.mailjet.com/v3.1/send";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const phone = body?.phone?.trim() || "Brak";
    const location = body?.location?.trim() || "Brak";
    const message = body?.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Prosze uzupelnic wymagane pola." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Podany adres e-mail jest nieprawidlowy." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILJET_API_KEY;
    const apiSecret = process.env.MAILJET_API_SECRET;
    const toEmail = process.env.MAILJET_TO_EMAIL || "kontakt@boxeat.pl";
    const fromEmail = process.env.MAILJET_FROM_EMAIL || "kontakt@boxeat.pl";
    const fromName = process.env.MAILJET_FROM_NAME || "BOX EAT";

    if (!apiKey || !apiSecret) {
      return NextResponse.json(
        { error: "Brak konfiguracji Mailjet na serwerze." },
        { status: 500 }
      );
    }

    const payload = {
      Messages: [
        {
          From: {
            Email: fromEmail,
            Name: fromName,
          },
          To: [
            {
              Email: toEmail,
              Name: "BOX EAT",
            },
          ],
          ReplyTo: {
            Email: email,
            Name: name,
          },
          Subject: "Nowa wiadomosc z formularza kontaktowego BOX EAT",
          TextPart: `Imie i nazwisko: ${name}
E-mail: ${email}
Telefon: ${phone}
Lokalizacja: ${location}

Wiadomosc:
${message}`,
          HTMLPart: `
            <h3>Nowa wiadomosc z formularza kontaktowego</h3>
            <p><strong>Imie i nazwisko:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Lokalizacja:</strong> ${location}</p>
            <p><strong>Wiadomosc:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        },
      ],
    };

    const authHeader = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
    const mailjetResponse = await fetch(MAILJET_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!mailjetResponse.ok) {
      const mailjetError = await mailjetResponse.text();
      return NextResponse.json(
        {
          error: "Mailjet odrzucil wiadomosc.",
          details: mailjetError,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Wystapil blad podczas obslugi formularza." },
      { status: 500 }
    );
  }
}
