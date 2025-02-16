import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, children, ...props }: Props) => {
	return (
		<div className={cn("p-6", className)} {...props}>
			{children}
		</div>
	);
};
