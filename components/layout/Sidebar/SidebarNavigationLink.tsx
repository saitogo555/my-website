"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Image } from "@/components/ui/Image";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useSidebar } from "@/hooks/useSidebar";
import type { NavigationLink } from "@/types/link";
import { cn, getPageNameFromPath } from "@/utils";

type Props = {
	iconSrc: string;
} & NavigationLink;

export function SidebarNavigationLink({ text, to, iconSrc }: Props) {
	const currentPagePath = usePathname();
	const sidebar = useSidebar();
	const { isMobile } = useBreakpoint();
	const isCurrentPage = currentPagePath === to;
	const title = getPageNameFromPath(to);

	const handleClick = () => {
		if (!isMobile) {
			return;
		}
		sidebar.close();
	};

	return (
		<Link
			className={cn(
				"flex h-6 cursor-pointer items-center pl-9",
				isCurrentPage ? "bg-neutral-300/20" : "hover:bg-neutral-300/10",
				"max-medium:h-auto max-medium:py-1",
			)}
			href={to}
			title={title}
			aria-label={title}
			onClick={handleClick}
		>
			<Image
				className={cn("w-4")}
				src={iconSrc}
				alt="File Icon"
				skeltonSize={{ width: "1rem", aspectRatio: "1/1" }}
			/>
			<span className={cn("ml-2 text-primary-text text-sm", "max-medium:text-lg")}>{text}</span>
		</Link>
	);
}
