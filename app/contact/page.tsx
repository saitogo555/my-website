import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { TypingText } from "@/components/ui/TypingText";
import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<Container>
			<PageTitle text="Contact" />
			<div className="mb-8 flex flex-col gap-4">
				<TypingText tag="p" text="以下のフォームに必要事項をご記入の上、送信してください。" />
				<TypingText
					tag="p"
					text="お問い合わせ内容によっては返信にお時間をいただく場合がございますので、ご了承ください。"
				/>
				<TypingText
					tag="p"
					text="お客様の個人情報はプライバシーポリシーに基づき、適切に取り扱います。"
				/>
			</div>
			<ContactForm />
		</Container>
	);
}
