import { cn } from "@/utils";
import type { HTMLAttributes } from "react";
import { OverflowMenuItem } from "./OverflowMenuItem";

type Props = {
	items: { text: string; iconSrc: string; href: string }[];
} & HTMLAttributes<HTMLUListElement>;

export const OverflowMenu = ({ items, ...props }: Props) => {
	return (
		<ul
			className={cn(
				"absolute top-full left-0 z-30 min-w-52 bg-theme-primary p-1",
				"overflow-hidden rounded-lg border border-neutral-700",
			)}
			{...props}
		>
			{items?.map((item, i) => (
				<OverflowMenuItem
					text={item.text}
					href={item.href}
					iconSrc={item.iconSrc}
					key={i.toString()}
				/>
			))}
		</ul>
	);
};
