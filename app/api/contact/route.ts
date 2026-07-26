import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactRequestSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(5000),
});

const htmlEscapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => htmlEscapeMap[char] ?? char);
}

function textToHtml(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'メール送信設定が未完了です' },
        { status: 503 }
      );
    }

    const parsed = ContactRequestSchema.safeParse(await request.json());

    if (!parsed.success) {
      return NextResponse.json(
        { error: '入力内容を確認してください' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const resend = new Resend(apiKey);

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['cayenneheart@gmail.com'],
      replyTo: email,
      subject: `[ポートフォリオ] ${subject}`,
      html: `
        <h2>ポートフォリオサイトからのお問い合わせ</h2>
        <p><strong>お名前:</strong> ${escapeHtml(name)}</p>
        <p><strong>メールアドレス:</strong> ${escapeHtml(email)}</p>
        <p><strong>件名:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p><strong>メッセージ:</strong></p>
        <p>${textToHtml(message)}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
