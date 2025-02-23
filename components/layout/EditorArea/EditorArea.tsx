import { cn } from "@/utils";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const EditorArea = ({ children }: Props) => {
	return (
		<div className="h-full bg-secondary">
			<div
				className={cn(
					"h-full w-full overflow-y-auto overflow-x-hidden",
					"scrollbar scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
				)}
			>
				{children}
			</div>
		</div>
	);
};
