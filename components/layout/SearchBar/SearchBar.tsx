"use client";

import { useToastNotice } from "@/hooks/useToastNotice";
import { cn } from "@/utils";
import { IoMdSearch } from "react-icons/io";

type Props = {
	className?: string;
};

export function SearchBar({ className }: Props) {
	const toastNotice = useToastNotice();

	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toastNotice.add({
				message: "現在のページのURLをクリップボードにコピーしました。",
			});
		} catch (error) {
			console.error(error);
			toastNotice.add({
				type: "error",
				message: "現在のページのURLのクリップボードへのコピーに失敗しました。",
			});
		}
	};

	return (
		<button
			className={cn(
				"flex w-full max-w-xl shrink-0 items-center justify-center px-2 py-[2px]",
				"rounded-lg border border-neutral-700 bg-secondary",
				"cursor-pointer text-[0.75rem] text-primary-text",
				"hover:border-neutral-500",
				"max-medium:shrink max-medium:text-base",
				className,
			)}
			type="button"
			title="現在のページのURLをコピーする"
			onClick={handleClick}
			aria-label="現在のページのURLをコピーする"
		>
			<IoMdSearch
				className={cn("-scale-x-100 mr-1 text-lg text-neutral-400", "max-medium:text-2xl")}
			/>
			SAITOGO.ME
		</button>
	);
};
