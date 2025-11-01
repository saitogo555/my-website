import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode, Ref } from "react";

type Props = {
	className?: string;
	ref?: Ref<HTMLLIElement>;
	children?: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

export function MenuItem({ className, ref, children, ...props }: Props) {
	return (
		<li
			className={cn(
				"flex shrink-0 rounded text-primary-text transition",
				"hover:bg-neutral-300/10",
				className,
			)}
			{...props}
			ref={ref}
		>
			{children}
		</li>
	);
}
