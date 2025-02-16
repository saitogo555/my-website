import { cn } from "@/utils";
import { type HTMLAttributes, type ReactNode, type Ref, memo } from "react";

type Props = {
	className?: string;
	ref?: Ref<HTMLLIElement>;
	children?: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

export const MenuItem = memo(({ className, ref, children, ...props }: Props) => {
	return (
		<li
			className={cn(
				"flex shrink-0 rounded text-theme-text-primary transition",
				"hover:bg-neutral-300/10",
				className,
			)}
			{...props}
			ref={ref}
		>
			{children}
		</li>
	);
});
