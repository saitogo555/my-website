import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
	className?: string;
	icon: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const WindowControlButton = ({ className, icon, ...props }: Props) => (
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
