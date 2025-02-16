import { cn } from "@/utils";
import { type ReactNode, memo } from "react";

type Props = {
	className?: string;
	icon: ReactNode;
};

export const ActivityIcon = memo(({ className, icon }: Props) => {
	return (
		<div
			className={cn(
				"flex cursor-pointer items-center justify-center p-3 text-2xl text-neutral-400",
				"hover:text-neutral-200",
				"max-medium:text-3xl",
				className,
			)}
		>
			{icon}
		</div>
	);
});
