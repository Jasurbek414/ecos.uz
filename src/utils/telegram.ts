const BOT_TOKEN = '8775437265:AAGkckKogNcEJkKFgOa8odoCAFjSXhqu3Gg';
const ADMIN_CHAT_ID = '6890870537';

export interface LeadData {
  fullName: string;
  phone: string;
  direction?: string;
  message?: string;
  source?: string;
}

export async function sendLeadToTelegram(data: LeadData): Promise<boolean> {
  const directionMap: Record<string, string> = {
    ERP_CRM: "🏢 ERP & CRM Tizimlari (Biznes avtomatlashtirish)",
    MOBILE_APP: "📱 Mobil Ilovalar (iOS & Android ishlab chiqish)",
    WEB_SAAS: "🌐 Veb-saytlar, Murakkab Portallar & SaaS",
    AI_BOT: "🤖 Sun'iy Intellekt (AI) & Aqlli Telegram Botlar",
    HOTEL_PMS: "🏨 Hotel ECOS PMS (Mehmonxona boshqaruv tizimi)",
    FACEID_IOT: "📹 Face ID & Biometriya (Turniket, Davomat nazorati)",
    NETWORK_VPN: "🛡 Tarmoq Xavfsizligi, MikroTik VPN & Serverlar",
    CUSTOM_DEV: "⚙️ Maxsus Buyurtma Asosida Dasturlash (Custom Software)",
    // Moslik uchun:
    HOTEL: "🏨 Hotel ECOS PMS",
    RETAIL: "🛒 ECOS Savdo & POS",
    FACEID: "📹 Face ID & Davomat",
    CUSTOM: "⚙️ Maxsus Dasturiy Ta'minot",
    ERP: "🏢 ERP & CRM Tizimlari",
    SMART_HOTEL: "📹 Smart IoT & Face ID",
    NETWORK: "🛡 Tarmoq Xavfsizligi & VPN",
  };

  const dirName = directionMap[data.direction || ''] || data.direction || "Umumiy konsultatsiya";
  const now = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

  const text = 
`🔔 <b>YANGI ARIZA — ECOS.UZ SAYTIDAN!</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${data.fullName}
📞 <b>Telefon:</b> ${data.phone}
🎯 <b>Yo'nalish:</b> ${dirName}
${data.message ? `💬 <b>Izoh / Xabar:</b> ${data.message}\n` : ''}📍 <b>Manba:</b> ${data.source || "ecos.uz bosh sahifa"}
⏰ <b>Vaqti:</b> ${now}
━━━━━━━━━━━━━━━━━━
<i>Ushbu ariza ecos.uz saytidan to'g'ridan-to'g'ri qabul qilindi.</i>`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: ADMIN_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const json = await res.json();
    return json.ok === true;
  } catch (err) {
    console.error('Failed to send lead to Telegram:', err);
    return false;
  }
}
