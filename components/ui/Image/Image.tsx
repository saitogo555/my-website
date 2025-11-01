"use client";

import NextImage, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { Skelton } from "../Skelton";

type Props = {
	className?: string;
	src: string;
	alt: string;
	skeltonSize?: {
		width?: string;
		height?: string;
		aspectRatio?: string;
	};
} & Omit<ImageProps, "className" | "src" | "alt" | "loading" | "width" | "height">;

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
				<NextImage
					{...props}
					className={className}
					width={0}
					height={0}
					src={src}
					loading="lazy"
					alt={alt}
					onLoad={handleLoad}
					onError={handleError}
				/>
			)}
		</>
	);
}
