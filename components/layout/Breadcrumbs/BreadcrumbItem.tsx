"use client";

import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";
import Link from "next/link";
import { VscChevronRight, VscSymbolMethod } from "react-icons/vsc";

type Props = {
	text: string;
	to: string;
	iconSrc?: string;
	disableArrow?: boolean;
}

export const BreadcrumbItem = ({ text, to, iconSrc, disableArrow }: Props) => {
	return (
		<Link
			className="group flex items-center text-primary-text/80 text-sm"
			key={to}
			href={to}
		>
			{iconSrc ? (
				<Image
					className="mr-1 w-4"
					src={iconSrc}
					alt={text}
					skeltonSize={{ width: "16px", height: "16px" }}
				/>
			) : (
				<VscSymbolMethod className="mr-1 text-base text-purple-400" />
			)}
			<span className="group-hover:text-primary-text">{text}</span>
			{!disableArrow && (
				<VscChevronRight className={cn("text-lg", "group-hover:text-primary-text")} />
			)}
		</Link>
	);
};
