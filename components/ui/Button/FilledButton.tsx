import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	className?: string;
	type?: "button" | "submit" | "reset";
	children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function FilledButton({ className, type = "button", children, ...props }: Props) {
	return (
		<button
			className={cn(
				"block cursor-pointer px-4 py-3 transition-all",
				"rounded-lg border-2 border-accent bg-accent text-center text-primary-text",
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
}
