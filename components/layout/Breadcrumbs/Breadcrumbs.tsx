"use client";

import { NAVIGATION_LINKS } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { cn } from "@/utils";

export const Breadcrumbs = () => {
	const pathname = usePathname();

	const breadcrumbs = useMemo(() => {
		const splittedPathList = pathname.split("/").filter((path) => path.length > 0);
		const links = splittedPathList.map((name, index) => {
			const to = `/${splittedPathList.slice(0, index + 1).join("/")}`;
			const text = NAVIGATION_LINKS.find((link) => link.to === to)?.text ?? name;
			const iconSrc = NAVIGATION_LINKS.find((link) => link.to === to)?.iconSrc;
			return {
				to,
				text,
				iconSrc,
			};
		});
		return links;
	}, [pathname]);

	return (
		<>
			{breadcrumbs.length > 0 && (
				<div
					className={cn(
						"relative z-10 w-full px-4 text-sm shadow shadow-black/50",
						"flex shrink-0 items-center overflow-x-auto overflow-y-hidden",
						"scrollbar-thin scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
						"max-medium:h-8",
					)}
				>
					{breadcrumbs.map((item, index) => (
						<BreadcrumbItem
							text={item.text}
							to={item.to}
							iconSrc={item.iconSrc}
							disableArrow={index === breadcrumbs.length - 1}
							key={item.to}
						/>
					))}
				</div>
			)}
		</>
	);
};
