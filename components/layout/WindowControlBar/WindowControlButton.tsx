import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
	icon: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export function WindowControlButton({ className, icon, ...props }: Props) {
	return (
		<button
			className={cn(
				"flex w-12 items-center justify-center text-center text-neutral-400 text-sm transition",
				"hover:bg-neutral-300/15",
				"max-medium:text-lg",
				className,
			)}
			type="button"
			{...props}
		>
			{icon}
		</button>
	);
}
