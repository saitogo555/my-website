"use server";

import { parseWithZod } from "@conform-to/zod";
import { createTransport } from "nodemailer";
import type { Options as MailOptions } from "nodemailer/lib/mailer";
import type { EmailResponse } from "@/features/contact/types";
import { wait } from "@/utils";
import { formSchema } from "../schemas/form";

export async function sendEmail(formData: FormData): Promise<EmailResponse> {
	await wait(1000);

	// 入力内容のバリデーション
	const submission = parseWithZod(formData, { schema: formSchema });
	if (submission.status !== "success") {
		return {
			success: false,
			message: "入力内容に誤りがあります",
		};
	}

	// SMTP設定
	const transporter = createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	// 入力内容の取得
	const { email, inquiry, name, tel } = submission.value;

	// ユーザー宛のメール設定
	const userMailOptions: MailOptions = {
		from: process.env.SMTP_USER,
		to: email,
		subject: "【SAITOGO.ME】お問い合わせありがとうございました",
		text: `
      ${name} 様\n
      \n
      この度は、SAITOGO.MEにお問い合わせいただき、誠にありがとうございます。\n
      以下の内容でお問い合わせを受け付けました。\n
      \n
      --------- お問い合わせ内容 ---------\n
      お名前: ${name}\n
      メールアドレス: ${email}\n
      電話番号: ${tel}\n
      お問い合わせ内容:\n
      ${inquiry}\n
      \n
      折り返しご連絡いたしますので、今しばらくお待ちください。\n
      なお、このメールは自動送信されていますので、返信いただいても対応できません。\n
      何かご不明な点がございましたら、再度ご連絡ください。\n
      \n
      contact@saitogo.me\n
      \n
      今後とも、SAITOGO.MEをよろしくお願いいたします。\n
      -----------------------------------\n
      SAITOGO.ME\n
      Website: https://saitogo.me\n
      Email: contact@saitogo.me\n
		`,
	};

	// 管理者宛のメール設定
	const adminMailOptions: MailOptions = {
		from: process.env.SMTP_USER,
		to: process.env.SMTP_USER,
		subject: `${email}からお問い合わせがありました`,
		text: `
      新しいお問い合わせがありました。\n
      \n
      --------- お問い合わせ内容 ---------\n
      お名前: ${name}\n
      メールアドレス: ${email}\n
      電話番号: ${tel}\n
      お問い合わせ内容:\n
      ${inquiry}\n
      -----------------------------------\n
      このメールは自動送信されています。\n
    `,
	};

	// メール送信
	try {
		await transporter.sendMail(userMailOptions);
		await transporter.sendMail(adminMailOptions);
		return {
			success: true,
			message: "お問い合わせを受け付けました",
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: "お問い合わせの送信に失敗しました",
		};
	}
}
