"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";
import { ActivityIcon } from "./ActivityIcon";

type Props = {
	className?: string;
	to: string;
	icon: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ActivityLink({ className, to, icon, ...props }: Props) {
	const currentPagePath = usePathname();
	const isCurrentPage = currentPagePath === to;

	return (
		<Link className={cn("relative", className)} href={to} {...props}>
			{isCurrentPage && <div className="absolute top-0 left-0 h-full w-0.5 bg-accent" />}
			<ActivityIcon className={`${isCurrentPage && "text-neutral-200"}`} icon={icon} />
		</Link>
	);
}
