import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, children, ...props }: Props) => {
	return (
		<div
			className={cn("overflow-hidden rounded-lg bg-theme-primary shadow-lg", className)}
			{...props}
		>
			{children}
		</div>
	);
};
