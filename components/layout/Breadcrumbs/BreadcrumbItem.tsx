"use client";

import Link from "next/link";
import { VscChevronRight, VscSymbolMethod } from "react-icons/vsc";
import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";

type Props = {
	text: string;
	to: string;
	iconSrc?: string;
	disableArrow?: boolean;
};

export function BreadcrumbItem({ text, to, iconSrc, disableArrow }: Props) {
	return (
		<Link
			className="group flex shrink-0 items-center text-primary-text/80 text-sm"
			key={to}
			href={to}
		>
			{iconSrc ? (
				<Image
					className={cn("mr-1 w-4", "max-medium:w-6")}
					src={iconSrc}
					alt={text}
					skeltonSize={{ width: "16px", height: "16px" }}
				/>
			) : (
				<VscSymbolMethod className={cn("mr-1 text-base text-purple-400", "max-medium:text-2xl")} />
			)}
			<span className={cn("group-hover:text-primary-text", "max-medium:text-lg")}>{text}</span>
			{!disableArrow && (
				<VscChevronRight
					className={cn("text-lg", "group-hover:text-primary-text", "max-medium:text-xl")}
				/>
			)}
		</Link>
	);
}
