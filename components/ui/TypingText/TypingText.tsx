"use client";

import { cn } from "@/utils";
import { memo } from "react";
import { InView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

type Props = {
	className?: string;
	tag: "p" | "div" | "span" | "strong" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b";
	text: string;
	delay?: number;
};

export const TypingText = memo(({ className, tag, text, delay = 0 }: Props) => {
	const Component = tag;

	return (
		<InView className={className} threshold={1} triggerOnce>
			{({ inView, ref }) => (
				<div ref={ref}>
					{/* SEO対策でプリレンダリングされるようにしている */}
					{!inView && (
						<Component className={cn("invisible text-transparent", className)}>{text}</Component>
					)}
					{inView && (
						<TypeAnimation
							className={cn("text-theme-text-primary", className)}
							sequence={[delay, text]}
							wrapper={tag}
							speed={{ type: "keyStrokeDelayInMs", value: 40 }}
							cursor={false}
						/>
					)}
				</div>
			)}
		</InView>
	);
});
