"use client";

import { motion, type TargetAndTransition, type Transition, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";
import { TypingText } from "@/components/ui/TypingText";
import type { SkillLevel } from "../../types/Skill";
import { StarRating } from "../StarRating";

type Props = {
	text: string;
	iconSrc: string;
	star: SkillLevel;
};

const initial: TargetAndTransition = {
	y: "25%",
	z: 0,
	opacity: 0,
};

const animate = (isInView: boolean): TargetAndTransition => ({
	y: isInView ? 0 : "25%",
	z: 0,
	opacity: isInView ? 1 : 0,
});

const transition: Transition = {
	duration: 0.5,
	type: "spring",
	damping: 8,
	stiffness: 80,
};

export function SkillCard({ text, iconSrc, star }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		amount: 1,
	});

	return (
		<motion.div ref={ref} initial={initial} animate={animate(isInView)} transition={transition}>
			<Card>
				<CardContent className="flex h-24 items-center gap-4">
					<Image
						className="w-8"
						src={iconSrc}
						alt={text}
						skeltonSize={{ width: "2rem", aspectRatio: "1/1" }}
					/>
					<TypingText className="text-xl" tag="p" text={text} delay={300} />
					<StarRating className="ml-auto" value={star} />
				</CardContent>
			</Card>
		</motion.div>
	);
}
