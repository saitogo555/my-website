import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
	children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function CardContent({ className, children, ...props }: Props) {
	return (
		<div className={cn("p-6", className)} {...props}>
			{children}
		</div>
	);
}
