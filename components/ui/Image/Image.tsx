"use client";

import { useState, useEffect } from "react";
import type { HTMLAttributes } from "react";
import { Skelton } from "../Skelton";
import { cn } from "@/utils";

type Props = {
	className?: string;
	src: string;
	alt: string;
	skeltonSize?: {
		width?: string;
		height?: string;
		aspectRatio?: string;
	};
} & Omit<HTMLAttributes<HTMLImageElement>, "className" | "src" | "alt" | "loading">;

export function Image({
	className,
	src,
	alt,
	skeltonSize = { aspectRatio: "16/9" },
	...props
}: Props) {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const img = new window.Image();
		img.src = src;
		img.onload = () => {
			setIsLoading(false);
		};
	}, [src]);

	const handleLoad = () => {
		setIsLoading(false);
	};

	const handleError = () => {
		console.error(`Error loading image: ${src}`);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? (
				<Skelton style={{ ...skeltonSize }} />
			) : (
				<img
					{...props}
					className={cn(className, { invisible: isLoading })}
					src={src}
					loading="lazy"
					alt={alt}
					onLoad={handleLoad}
					onError={handleError}
				/>
			)}
		</>
	);
};
