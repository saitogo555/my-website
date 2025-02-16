import { cn } from "@/utils";
import type { ReactNode } from "react";
import { VscTarget } from "react-icons/vsc";

type Props = {
	className?: string;
	children: ReactNode;
};

export const TimelineLabel = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				"flex items-center gap-1 rounded-full bg-theme-accent px-1 text-theme-text-accent",
				className,
			)}
		>
			<VscTarget />
			{children}
		</div>
	);
};
