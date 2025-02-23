import { cn } from "@/utils";
import { type InputHTMLAttributes, memo } from "react";

type Props = {
	className?: string;
	isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = memo(({ className, isError, ...props }: Props) => {
	return (
		<input
			className={cn(
				"w-full rounded-lg bg-neutral-700/60 p-4 text-primary-text outline-none",
				"placeholder:opacity-40 focus:bg-neutral-700",
				{ "bg-red-500/50": isError },
				className,
			)}
			type="text"
			{...props}
		/>
	);
});
