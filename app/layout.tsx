import type { Metadata } from "next";
import "../styles/global.css";
import { ActivityBar } from "@/components/layout/ActivityBar";
import { EditorArea } from "@/components/layout/EditorArea";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatusBar } from "@/components/layout/StatusBar";
import { TabBar } from "@/components/layout/TabBar";
import { Panel } from "@/components/layout/Panel";
import { TitleBar } from "@/components/layout/TitleBar";
import { SidebarProvider } from "@/provider/SidebarProvider";
import { ToastNoticeProvider } from "@/provider/ToastNoticeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

export const metadata: Metadata = {
	title: {
		template: "%s - 齋藤 豪 | SAITO GO",
		default: "齋藤 豪 | SAITO GO",
	},
	authors: { name: "齋藤豪", url: "https://saitogo.me" },
	description: [
		"フルスタックWebデベロッパーの齋藤豪です。",
		"フロントエンドとバックエンドの両方の知識を活かし、WebサイトやWebアプリを作ったり教えたりしてます。",
	].join(),
	openGraph: {
		type: "website",
		locale: "ja_JP",
		url: "https://www.saitogo.me/",
		siteName: "齋藤豪 | SAITO GO",
		title: "齋藤豪 | SAITO GO",
		description: [
			"フルスタックWebデベロッパーの齋藤豪です。",
			"フロントエンドとバックエンドの両方の知識を活かし、WebサイトやWebアプリを作ったり教えたりしてます。",
		].join(),
		images: [
			{
				url: "https://www.saitogo.me/images/og.webp",
				width: 1280,
				height: 720,
				alt: "OG画像",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		creator: "@saitogo555",
		site: "@saitogo555",
		title: "齋藤豪 | フルスタックWebデベロッパー",
		description:
			"フルスタックWebデベロッパーの齋藤豪です。フロントエンドとバックエンドの両方の知識を活かし、WebサイトやWebアプリを作ったり教えたりしてます。",
		images: ["https://www.saitogo.me/images/og.webp"],
	},
	keywords: [
		"齋藤 豪",
		"さいとう ごう",
		"サイトウ ゴウ",
		"SAITO GO",
		"フルスタック",
		"Webデベロッパー",
		"プログラマー",
		"エンジニア",
		"フロントエンド",
		"バックエンド",
		"デザイン",
	],
	alternates: {
		canonical: "https://www.saitogo.me/",
	},
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="ja">
			<body>
				<ToastNoticeProvider>
					<div className="flex h-screen w-screen flex-col overflow-hidden bg-secondary">
						<SidebarProvider>
							<header>
								<TitleBar />
							</header>
							<div className="relative flex h-(--viewport-middle-height)">
								<ActivityBar />
								<Sidebar />
							</div>
							<div className="flex min-w-0 grow flex-col">
								<TabBar />
								<main className="shrink grow basis-0 overflow-hidden">
									<EditorArea>{children}</EditorArea>
								</main>
								<Panel />
							</div>
						</SidebarProvider>
						<footer>
							<StatusBar />
						</footer>
					</div>
				</ToastNoticeProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
