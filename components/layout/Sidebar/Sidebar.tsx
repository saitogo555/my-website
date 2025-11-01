"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/utils";
import { SidebarAnchorMenu } from "./SidebarAnchorMenu";
import { SidebarNavigation } from "./SidebarNavigationMenu";

export function Sidebar() {
	const sidebar = useSidebar();

	const handleClickOverlay = () => {
		sidebar.close();
	};

	return (
		<div className={cn("relative z-20")}>
			<div
				className={cn(
					"flex h-full w-(--sidebar-width) select-none flex-col py-1",
					"border-divider border-r bg-primary transition-all duration-300",
					"max-medium:absolute max-medium:top-0 max-medium:z-20",
					{
						"-translate-x-full -mr-(--sidebar-width)": !sidebar.isOpen,
					},
				)}
			>
				<h2 className={cn("py-2 pl-6 text-primary-text text-xs", "max-medium:text-base")}>
					ナビゲーション
				</h2>
				<div className="flex grow flex-col overflow-hidden">
					<SidebarNavigation />
					<SidebarAnchorMenu />
				</div>
				<div
					className={cn(
						"absolute top-0 left-full hidden h-full w-screen transition-all duration-[0.25s]",
						sidebar.isOpen ? "bg-black/70" : "pointer-events-none",
					)}
				/>
			</div>
			<button
				className={cn(
					"invisible fixed top-0 left-0 z-10 h-dvh w-dvw bg-black/50 opacity-0",
					"transition-opacity duration-300",
					"min-medium:hidden",
					{ "visible opacity-100": sidebar.isOpen },
				)}
				type="button"
				onClick={handleClickOverlay}
				aria-label="サイドバーを閉じる"
			/>
		</div>
	);
};
