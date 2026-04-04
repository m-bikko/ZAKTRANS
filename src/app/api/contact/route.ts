import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    location: string;
    comment?: string;
}

const SERVICE_LABELS: Record<string, string> = {
    plumbing: "Сантехнические системы",
    welding: "Сварочные работы",
    turnkey: "Строительство «под ключ»",
    roads: "Строительство дорог",
    rvs: "Строительство РВС",
    pipelines: "Строительство нефтепроводов",
    multiple: "Несколько видов работ",
};

const LOCATION_LABELS: Record<string, string> = {
    atyrau: "Атырау",
    tengiz: "Тенгиз",
    kulsary: "Кульсары",
    other: "Другое месторождение",
};

const sendTelegram = async (data: ContactPayload): Promise<void> => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        throw new Error("Telegram credentials not configured");
    }

    const message = [
        "📋 *Новая заявка с сайта ZAK Trans*",
        "",
        `👤 *Имя / Компания:* ${escapeMarkdown(data.name)}`,
        `📞 *Телефон:* ${escapeMarkdown(data.phone)}`,
        `📧 *Email:* ${escapeMarkdown(data.email)}`,
        `🔧 *Вид работ:* ${escapeMarkdown(SERVICE_LABELS[data.serviceType] ?? data.serviceType)}`,
        `📍 *Локация:* ${escapeMarkdown(LOCATION_LABELS[data.location] ?? data.location)}`,
        data.comment ? `💬 *Комментарий:* ${escapeMarkdown(data.comment)}` : "",
        "",
        `🕐 ${new Date().toLocaleString("ru-KZ", { timeZone: "Asia/Aqtau" })}`,
    ]
        .filter(Boolean)
        .join("\n");

    const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown",
            }),
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Telegram API error: ${error}`);
    }
};

const escapeMarkdown = (text: string): string =>
    text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const body = (await request.json()) as ContactPayload;

        if (!body.name || !body.phone || !body.email || !body.serviceType || !body.location) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await sendTelegram(body);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
