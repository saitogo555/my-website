import type { ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
	children?: ReactNode;
};

export function Chip({ className, children }: Props) {
	return (
		<div className={cn("rounded-full bg-primary px-3 py-1 text-primary-text text-sm", className)}>
			{children}
		</div>
	);
}
