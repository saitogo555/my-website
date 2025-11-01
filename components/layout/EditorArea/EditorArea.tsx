import type { ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	children: ReactNode;
};

export function EditorArea({ children }: Props) {
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
}
