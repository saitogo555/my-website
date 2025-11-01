import type { ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
	children?: ReactNode;
};

export function Container({ className, children }: Props) {
	return (
		<div
			className={cn(
				"@container",
				"mx-auto min-h-full w-full max-w-extra p-8",
				"max-small:p-4 max-small:pb-8",
				className,
			)}
		>
			{children}
		</div>
	);
}
