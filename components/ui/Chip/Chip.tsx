import { cn } from "@/utils";
import type { ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

export const Chip = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				"rounded-full bg-theme-secondary px-3 py-1 text-sm text-theme-text-primary",
				className,
			)}
		>
			{children}
		</div>
	);
};
