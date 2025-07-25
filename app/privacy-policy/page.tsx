import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
	return (
		<Container>
			<PageTitle text="Privacy Policy" />
			<Section>
				<TypingText
					tag="p"
					text="本プライバシーポリシーは、当サイトがユーザーの個人情報をどのように収集、使用、保護するかについて説明しています。"
				/>
			</Section>
			<Section>
				<SectionTitle text="個人情報の収集" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="当サイトでは、以下の場合に個人情報を収集することがあります："
					/>
					<ul className="list-disc list-inside my-2 ml-4">
						<li>
							<TypingText
								tag="span"
								text="お問い合わせフォームからのご連絡時（お名前、メールアドレス、お問い合わせ内容）"
							/>
						</li>
						<li>
							<TypingText
								tag="span"
								text="Webサイトの利用状況の分析（Google Analyticsなどのツール使用時）"
							/>
						</li>
					</ul>
				</div>
			</Section>
			<Section>
				<SectionTitle text="個人情報の利用目的" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="収集した個人情報は、以下の目的で利用します："
					/>
					<ul className="list-disc list-inside my-2 ml-4">
						<li>
							<TypingText
								tag="span"
								text="お問い合わせに対する回答および対応"
							/>
						</li>
						<li>
							<TypingText tag="span" text="サイトの改善および品質向上" />
						</li>
						<li>
							<TypingText tag="span" text="法的義務の履行" />
						</li>
					</ul>
				</div>
			</Section>
			<Section>
				<SectionTitle text="個人情報の第三者提供" />
				<TypingText
					tag="p"
					text="当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。"
				/>
			</Section>
			<Section>
				<SectionTitle text="Cookieの使用" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="当サイトでは、サービスの向上とユーザー体験の改善のため、Cookieを使用しています。"
					/>
					<TypingText
						tag="p"
						text="Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。"
					/>
				</div>
			</Section>
			<Section>
				<SectionTitle text="Google Analytics" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="当サイトでは、サイトの利用状況を分析するためにGoogle Analyticsを使用しています。"
					/>
					<TypingText
						tag="p"
						text="Google Analyticsは、トラフィックデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。"
					/>
				</div>
			</Section>
			<Section>
				<SectionTitle text="個人情報の保護" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="当サイトは、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じています。"
					/>
					<TypingText
						tag="p"
						text="個人情報へは、必要最小限の権限を持つ担当者のみがアクセスできるよう制限しています。"
					/>
				</div>
			</Section>
			<Section>
				<SectionTitle text="個人情報の開示・訂正・削除" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="ユーザーは、自身の個人情報について、開示、訂正、削除を求めることができます。"
					/>
					<TypingText
						tag="p"
						text="ご希望の場合は、お問い合わせフォームよりご連絡ください。"
					/>
				</div>
			</Section>
			<Section>
				<SectionTitle text="プライバシーポリシーの変更" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。"
					/>
					<TypingText
						tag="p"
						text="変更した場合は、当ページにて告知いたします。"
					/>
				</div>
			</Section>
			<Section>
				<SectionTitle text="お問い合わせ" />
				<div className="my-4">
					<TypingText
						tag="p"
						text="本プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。"
					/>
					<TypingText tag="p" text="制定日：2025年6月25日" />
				</div>
			</Section>
		</Container>
	);
};

export default PrivacyPolicyPage;
