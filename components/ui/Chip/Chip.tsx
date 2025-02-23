import { cn } from "@/utils";
import type { ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

export const Chip = ({ className, children }: Props) => {
	return (
		<div className={cn("rounded-full bg-secondary px-3 py-1 text-primary-text text-sm", className)}>
			{children}
		</div>
	);
};
