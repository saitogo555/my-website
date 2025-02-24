import { cn } from "@/utils";
import type { ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

export const Container = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				"mx-auto min-h-full w-full max-w-extra p-8",
				"max-small:p-4 max-small:pb-8",
				className,
			)}
		>
			{children}
		</div>
	);
};
