import { TypingText } from "@/components/ui/TypingText";
import type { ReactNode } from "react";

type Props = {
	title: string;
	required?: boolean;
	children?: ReactNode;
};

export const FormSection = ({ title, required, children }: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-1">
				<TypingText className="font-bold text-lg text-primary-text" tag="h2" text={title} />
				{required && <span className="text-red-500">*</span>}
			</div>
			<div>{children}</div>
		</div>
	);
};
