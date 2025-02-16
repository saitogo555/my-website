import { cn } from "@/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
	children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Section = ({ children, ...props }: Props) => {
	return (
		<section className={cn("mt-20", "first-of-type:mt-0")} {...props}>
			{children}
		</section>
	);
};
