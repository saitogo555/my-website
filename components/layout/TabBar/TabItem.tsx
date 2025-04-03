"use client";
import { Image } from "@/components/ui/Image";
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
				"relative flex shrink-0 cursor-pointer items-center bg-primary px-4 py-2",
				"border-r border-r-divider border-b border-b-transparent",
				"hover:bg-secondary",
				isCurrentPage && "border-b-secondary bg-secondary",
			)}
			href={to}
			title={title}
			aria-label={title}
		>
			{isCurrentPage && (
				<div className="-mx-[1px] absolute top-0 left-0 z-10 h-[1px] w-[calc(100%+2px)] bg-accent" />
			)}
			<Image
				className={cn("w-4", "max-medium:w-6")}
				src={iconSrc}
				alt="File Icon"
				skeltonSize={{ width: "1rem", aspectRatio: "1/1" }}
			/>
			<span className={cn("ml-2 text-primary-text text-sm", "max-medium:text-lg")}>{text}</span>
		</Link>
	);
};
