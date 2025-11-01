"use client";

import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
	className?: string;
	children?: ReactNode;
};

export function InView({ className, children }: Props) {
	const { ref } = useInView({ threshold: 1, triggerOnce: true });

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
};
