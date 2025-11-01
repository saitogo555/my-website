import { cn } from "@/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
	className?: string;
	type?: "button" | "submit" | "reset";
	children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function OutlinedButton({ className, type = "button", children, ...props }: Props) {
	return (
		<button
			className={cn(
				"block cursor-pointer px-4 py-3 transition-all",
				"rounded-lg border-2 border-accent text-center text-accent",
				"hover:hue-rotate-30",
				"disabled:cursor-not-allowed disabled:brightness-75",
				className,
			)}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};
