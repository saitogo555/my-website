"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/utils";
import { type ReactNode, memo, useState } from "react";
import {
	VscAccount,
	VscExtensions,
	VscFiles,
	VscFolderLibrary,
	VscHome,
	VscMail,
} from "react-icons/vsc";
import { ActivityButton } from "./ActivityButton";
import { ActivityLink } from "./ActivityLink";
import { MdQrCodeScanner } from "react-icons/md";
import { QRCode } from "../QRCode";

type ActivityLinkType = {
	to: string;
	title: string;
	icon: ReactNode;
};

const items: ActivityLinkType[] = [
	{ to: "/", title: "Home", icon: <VscHome /> },
	{ to: "/about", title: "About", icon: <VscAccount /> },
	{ to: "/skills", title: "Skills", icon: <VscExtensions /> },
	{ to: "/works", title: "Works", icon: <VscFolderLibrary /> },
	{ to: "/contact", title: "Contact", icon: <VscMail /> },
];

export const ActivityBar = memo(() => {
	const [isQrCodeVisible, setQrCodeVisible] = useState<boolean>(false);
	const sidebar = useSidebar();

	const handleClickQrCodeOpenButton = () => {
		setQrCodeVisible(true);
	};

	const handleClickQrCodeCloseButton = () => {
		setQrCodeVisible(false);
	};

	return (
		<>
			<aside
				className={cn(
					"relative z-30 flex h-full w-(--activity-bar-width) shrink-0 flex-col",
					"overflow-y-auto overflow-x-hidden border-divider border-r bg-primary",
				)}
			>
				<ActivityButton
					icon={<VscFiles />}
					title="ナビゲーション"
					aria-label={sidebar.isOpen ? "メニューを閉じる" : "メニューを開く"}
					onClick={() => sidebar.toggle()}
				/>
				{items.map((item) => (
					<ActivityLink to={item.to} title={item.title} icon={item.icon} key={item.to.toString()} />
				))}
				<ActivityButton
					className="mt-auto"
					icon={<MdQrCodeScanner />}
					title="QRコード"
					aria-label="QRコードを表示"
					onClick={handleClickQrCodeOpenButton}
				/>
			</aside>
			{isQrCodeVisible && <QRCode onClose={handleClickQrCodeCloseButton} />}
		</>
	);
});
