"use client";

import { Card } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";
import { type KeyboardEvent, useState, type MouseEvent } from "react";

const perspective = 1000;

export const ProfileImage = () => {
	const [isFlipped, setIsFlipped] = useState<boolean>(false);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		// マウスの位置と方向によって画像が傾く
		const el = e.currentTarget;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const deltaX = (x - centerX) / centerX;
		const deltaY = (y - centerY) / centerY;
		const rotateX = deltaY * 10; // X軸の回転角度
		const rotateY = -deltaX * 10; // Y軸の回転角度
		const transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		el.style.transform = transform;
	};

	const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
		// マウスが離れたら元の位置に戻す
		const el = e.currentTarget;
		el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
		el.style.transition = "transform 0.3s ease-out";
	};

	const handleClick = () => {
		setIsFlipped((prevIsFlipped) => !prevIsFlipped);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		// EnterキーまたはSpaceキーでクリックイベントを発火
		if (!["Enter", " "].includes(e.key)) return;
		e.preventDefault();
		handleClick();
	};

	return (
		<Card
			className={cn(
				"relative aspect-square cursor-pointer overflow-visible bg-transparent shadow-none drop-shadow-lg",
				`transform-[perspective(${perspective}px) rotateX(0deg) rotateY(0deg)] transition-transform duration-100 ease-out`,
			)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<div className="perspective-distant">
				<div
					className={cn(
						"-rotate-y-180 backface-hidden absolute inset-0 transition-transform duration-500",
						{
							"rotate-y-0": isFlipped,
						},
					)}
				>
					<Image
						className="grow overflow-hidden rounded-lg"
						src="/images/about/profile.webp"
						alt="My Icon"
					/>
				</div>
				<div
					className={cn("backface-hidden absolute inset-0 transition-transform duration-500", {
						"rotate-y-180": isFlipped,
					})}
				>
					<Image
						className="grow overflow-hidden rounded-lg"
						src="/images/about/profile-ghibli.webp"
						alt="My Icon"
					/>
				</div>
			</div>
		</Card>
	);
};
