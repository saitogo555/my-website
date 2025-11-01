"use client";

import { type ChangeEvent, useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";
import type { WorkImage } from "../../types";

type Props = {
	image: WorkImage;
};

export function ImageViewer({ image }: Props) {
	const [scale, setScale] = useState<number>(100);

	const handleChangeScale = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value);
		const newScale = Math.min(Math.max(value, 1), 100);
		setScale(newScale);
	};

	const handleClickScaleUp = () => {
		setScale((prevScale) => Math.min(prevScale + 1, 100));
	};

	const handleClickScaleDown = () => {
		setScale((prevScale) => Math.max(prevScale - 1, 1));
	};

	return (
		<div
			className={cn(
				"flex h-full flex-col overflow-auto",
				"scrollbar scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
			)}
		>
			<div
				className={cn(
					"sticky top-0 z-0 flex items-center justify-between bg-secondary px-4 py-2 shadow-lg",
					"max-medium:flex-col",
				)}
			>
				<h1 className="font-bold text-primary-text text-xl">{image.title}</h1>
				<div className={cn("flex w-full max-w-lg items-center gap-4", "max-medium:max-w-full")}>
					<input
						className="grow cursor-pointer accent-accent"
						type="range"
						min={1}
						max={100}
						value={scale}
						onChange={handleChangeScale}
					/>
					<div
						className={cn(
							"flex items-center rounded-lg border border-divider px-4 py-2 text-accent-text",
							"has-[input[type=number]:focus]:border-accent",
						)}
					>
						<input
							className="spin-button-hidden outline-none"
							type="number"
							min={1}
							max={100}
							value={scale}
							onInput={handleChangeScale}
						/>
						<span>%</span>
						<div className="ml-2 flex flex-col">
							<button
								className={cn("cursor-pointer text-xs", "hover:text-accent")}
								type="button"
								onClick={handleClickScaleUp}
							>
								<VscTriangleUp />
							</button>
							<button
								className={cn("cursor-pointer text-xs", "hover:text-accent")}
								type="button"
								onClick={handleClickScaleDown}
							>
								<VscTriangleDown />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="grow">
				<Image
					className="mx-auto w-full"
					src={image.src}
					alt={image.title}
					style={{ width: `${scale}%` }}
					skeltonSize={{ width: "100%", height: "100%" }}
				/>
			</div>
		</div>
	);
}
