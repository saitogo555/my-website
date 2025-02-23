"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type AnchorHTMLAttributes, type ReactNode, memo } from "react";
import { ActivityIcon } from "./ActivityIcon";

type Props = {
	to: string;
	icon: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ActivityLink = memo(({ to, icon, ...props }: Props) => {
	const currentPagePath = usePathname();
	const isCurrentPage = currentPagePath === to;

	return (
		<Link className="relative" href={to} {...props}>
			{isCurrentPage && <div className="absolute top-0 left-0 h-full w-0.5 bg-accent" />}
			<ActivityIcon className={`${isCurrentPage && "text-neutral-200"}`} icon={icon} />
		</Link>
	);
});
