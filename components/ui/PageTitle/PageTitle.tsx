"use client";
import { cn } from "@/utils";
import { InView } from "../../utils/InView";
import { TypingText } from "../TypingText";

type Props = {
	text?: string;
};

export function PageTitle({ text }: Props) {
	return (
		<InView className="mb-10">
			<TypingText
				className={cn(
					"table py-2 font-bold text-6xl",
					"bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
				)}
				tag="h1"
				text={text ?? ""}
			/>
		</InView>
	);
};
