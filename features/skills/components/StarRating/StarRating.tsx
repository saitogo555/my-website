"use client";

import type { SkillLevel } from "@/features/skills/types/Skill";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	value?: SkillLevel;
};

const fullStarVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0,
		rotate: 30,
		z: 0,
	},
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		rotate: 0,
		z: 0,
		transition: {
			delay: i * 0.3,
			duration: 0.5,
			type: "spring",
			damping: 6,
			stiffness: 100,
			restDelta: 0.001,
		},
	}),
};

const emptyStarVariants: Variants = {
	hidden: {
		opacity: 0,
		z: 0,
	},
	visible: (i: number) => ({
		opacity: 1,
		z: 0,
		transition: {
			delay: i * 0.3,
			duration: 0.5,
			type: "tween",
			ease: "easeOut",
		},
	}),
};

export const StarRating = ({ className, value }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		amount: 1,
	});
	const fullStarNum = value ?? 0;
	const emptyStarNum = value ? 3 - value : 0;
	const stars = [
		...[...Array(fullStarNum)].map((_, i) => (
			<IoStar className="text-yellow-400" key={`full-${i.toString()}`} />
		)),
		...[...Array(emptyStarNum)].map((_, i) => (
			<IoStarOutline className="text-neutral-600" key={`empty-${i.toString()}`} />
		)),
	];

	return (
		<div ref={ref} className={twMerge("flex gap-1 text-xl", className)}>
			{stars.map((item, i) => (
				<motion.div
					custom={i}
					variants={i < fullStarNum ? fullStarVariants : emptyStarVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					key={i.toString()}
				>
					{item}
				</motion.div>
			))}
		</div>
	);
};
