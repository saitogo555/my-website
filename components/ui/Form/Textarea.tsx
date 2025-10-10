import { cn } from "@/utils";
import { type TextareaHTMLAttributes } from "react";

type Props = {
	className?: string;
	isError?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, isError, ...props }: Props) => {
	return (
		<textarea
			className={cn(
				"w-full resize-none rounded-lg bg-neutral-700/60 p-4 text-primary-text outline-none",
				"placeholder:opacity-40 focus:bg-neutral-700",
				{ "bg-red-500/50": isError },
				className,
			)}
			{...props}
		/>
	);
};
