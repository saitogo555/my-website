"use client";

import { cn } from "@/utils";
import { TypingText } from "../TypingText";

type Props = {
	className?: string;
	text?: string;
};

export const SectionTitle = ({ className, text }: Props) => {
	const id = text?.replace(/\s+/g, "-");

	return (
		<div
			id={id}
			className={cn(
				"mb-8 h-11 border-b-4 border-b-theme-border text-4xl text-theme-text-primary",
				className,
			)}
			data-anchor-link={text}
		>
			<TypingText
				className={cn(
					"table pb-1 font-bold",
					"bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
				)}
				tag="h2"
				text={text ?? ""}
			/>
		</div>
	);
};
