"use client";

import { InView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/utils";

type Props = {
	className?: string;
	tag: "p" | "div" | "span" | "strong" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b";
	text: string;
	delay?: number;
};

export function TypingText({ className, tag, text, delay = 0 }: Props) {
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
							className={cn("text-primary-text", className)}
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
}
