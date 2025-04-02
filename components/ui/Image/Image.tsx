"use client";

import { useState, useEffect } from "react";
import type { HTMLAttributes } from "react";
import { Skelton } from "../Skelton";
import { cn } from "@/utils";

type Props = {
	className?: string;
	src: string;
	alt: string;
	aspectRatio?: string;
} & Omit<HTMLAttributes<HTMLImageElement>, "className" | "src" | "alt" | "loading">;

export const Image = ({ className, src, alt, aspectRatio = "16/9", ...props }: Props) => {
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
		<div className="relative" style={{ aspectRatio: isLoading ? aspectRatio : undefined }}>
			{isLoading && (
				<Skelton className="absolute inset-0 h-full w-full" style={{ aspectRatio: aspectRatio }} />
			)}
			<img
				{...props}
				className={cn(className, { invisible: isLoading })}
				src={src}
				loading="lazy"
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
			/>
		</div>
	);
};
