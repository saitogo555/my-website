import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
	children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Section({ children, ...props }: Props) {
	return (
		<section className={cn("mt-20", "first-of-type:mt-0")} {...props}>
			{children}
		</section>
	);
}
