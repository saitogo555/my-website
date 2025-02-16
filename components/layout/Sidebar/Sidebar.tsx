"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/utils";
import { useCallback, useEffect } from "react";
import { SidebarAnchorMenu } from "./SidebarAnchorMenu";
import { SidebarNavigation } from "./SidebarNavigationMenu";

export const Sidebar = () => {
	const sidebar = useSidebar();

	const handleClickOverlay = () => {
		sidebar.close();
	};

	const handleKeydown = useCallback(
		(e: globalThis.KeyboardEvent) => {
			if (e.ctrlKey && e.key === "b") {
				e.preventDefault();
				sidebar.toggle();
			}
		},
		[sidebar],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [handleKeydown]);

	return (
		<div className="relative z-20 border-theme-border border-r">
			<div
				className={cn(
					"flex h-full w-(--sidebar-width) select-none flex-col bg-theme-primary py-1",
					"transition-all duration-300",
					"max-medium:absolute max-medium:top-0 max-medium:z-20",
					{ "-translate-x-full -mr-(--sidebar-width)": !sidebar.isOpen },
				)}
			>
				<h2 className={cn("py-2 pl-6 text-theme-text-primary text-xs", "max-medium:text-base")}>
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
