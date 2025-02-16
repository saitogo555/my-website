"use client";
import type { NavigationLink } from "@/types/link";
import { cn, getPageNameFromPath } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	iconSrc: string;
} & NavigationLink;

export const TabItem = ({ text, to, iconSrc }: Props) => {
	const currentPagePath = usePathname();
	const isCurrentPage = currentPagePath === to;
	const title = getPageNameFromPath(to);

	return (
		<Link
			className={cn(
				"relative flex shrink-0 cursor-pointer items-center bg-theme-primary px-4 py-2",
				"border-r border-r-theme-border border-b border-b-transparent",
				"hover:bg-theme-secondary",
				isCurrentPage && "border-b-theme-secondary bg-theme-secondary",
			)}
			href={to}
			title={title}
			aria-label={title}
		>
			{isCurrentPage && (
				<div className="-mx-[1px] absolute top-0 left-0 z-10 h-[1px] w-[calc(100%+2px)] bg-theme-accent" />
			)}
			<img className={cn("w-4", "max-medium:w-6")} src={iconSrc} alt="File Icon" />
			<span className={cn("ml-2 text-sm text-theme-text-primary", "max-medium:text-lg")}>
				{text}
			</span>
		</Link>
	);
};
