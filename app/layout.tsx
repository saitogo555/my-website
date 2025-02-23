import type { Metadata } from "next";
import "../styles/global.css";
import { ActivityBar } from "@/components/layout/ActivityBar";
import { EditorArea } from "@/components/layout/EditorArea";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatusBar } from "@/components/layout/StatusBar";
import { TabBar } from "@/components/layout/TabBar";
import { Terminal } from "@/components/layout/Terminal";
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
	openGraph: {},
	twitter: {},
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="ja">
			<body>
				<ToastNoticeProvider>
					<div className="flex h-screen w-screen flex-col overflow-hidden bg-secondary">
						<header>
							<TitleBar />
						</header>
						<div className="relative flex h-(--viewport-middle-height)">
							<SidebarProvider>
								<ActivityBar />
								<Sidebar />
							</SidebarProvider>
							<div className="flex min-w-0 grow flex-col">
								<TabBar />
								<main className="shrink grow basis-0 overflow-hidden">
									<EditorArea>{children}</EditorArea>
								</main>
								<Terminal />
							</div>
						</div>
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
