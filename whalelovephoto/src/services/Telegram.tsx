"use server";

interface FormData {
    story: string;
    phone: string;
    email: string;
    name: string;
    instagram?: string;
}

export async function sendMessage(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let instagramString = '';
    if (data.instagram) {
        instagramString = `Instagram: ${data.instagram}\n`;
    }
    //text: 1-4096 characters after entities parsing
    const message = {
      "chat_id": process.env.TG_CHANNEL_ID,
      "text" : `Name \: ${data.name} \n`+
      `Phone \: ${data.phone}\n`+
      `Email \: ${data.email}\n`+
      instagramString+
      `Story \: ${data.story}`
    };
    const res = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const response = await res.json();
    console.log('Response data:', response);
}