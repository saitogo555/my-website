import { cn } from "@/utils";
import type { HTMLAttributes } from "react";

type Props = {
	className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export const Skelton = ({ className, ...props }: Props) => {
	return (
		<div className={cn("animate-skelton overflow-hidden rounded-lg", className)} {...props}>
			<div className="h-full w-full bg-secondary/50 dark:bg-primary/50" />
		</div>
	);
};
