import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: Props) {
	return (
		<div className={cn("overflow-hidden rounded-lg bg-primary shadow-lg", className)} {...props}>
			{children}
		</div>
	);
};
