import { TypingText } from "@/components/ui/TypingText";
import { InView } from "@/components/utils/InView";
import { cn } from "@/utils";
import type { ReactNode } from "react";

type Props = {
	className?: string;
	label: string;
	text: string;
	icon: ReactNode;
};

export const ProfileCard = ({ className, label, text, icon }: Props) => {
	return (
		<InView className={cn("flex items-center gap-4", className)}>
			<div className="rounded-full bg-theme-primary p-4">
				<span className="block text-2xl text-theme-text-primary contrast-50">{icon}</span>
			</div>
			<div>
				<TypingText className="text-sm opacity-70" tag="span" text={label} />
				<TypingText className="text-lg" tag="p" text={text} />
			</div>
		</InView>
	);
};
