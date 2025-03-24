"use client";

import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useCallback, useRef, useState } from "react";
import { useTerminalManager } from "./useTerminalManager";
import { TerminalLine } from "./TerminalLine";

type Log = {
	pathname: string;
	command: string;
};

export const Terminal = () => {
	const pathname = usePathname();
	const inputRef = useRef<HTMLInputElement>(null);
	const [lines, setLines] = useState<Log[]>([]);
	const terminalManager = useTerminalManager();

	const addLine = useCallback((dirPath: string, command: string) => {
		setLines((prevLines) => [...prevLines, { pathname: dirPath, command }]);
	}, []);

	const handleKeydown = (e: KeyboardEvent) => {
		if (inputRef.current === null || e.key !== "Enter") return;
		const input = inputRef.current;
		const val = input.value;
		const args = val.split(" ");
		const command = args.shift() || "";

		addLine(pathname, val);
		terminalManager.execute(command, ...args);

		const parentElement = input.parentElement;
		parentElement?.scrollTo(0, parentElement.scrollHeight);
		inputRef.current.value = "";
	};

	return (
		<label
			className={cn(
				"ml-6 block h-full overflow-auto",
				"scrollbar scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
			)}
			htmlFor="terminal-input"
		>
			{lines.map((line, i) => (
				<TerminalLine key={i.toString()} pathname={line.pathname}>
					{line.command}
				</TerminalLine>
			))}
			<TerminalLine pathname={pathname}>
				<input
					id="terminal-input"
					className="w-full outline-none"
					type="text"
					ref={inputRef}
					onKeyDown={handleKeydown}
				/>
			</TerminalLine>
		</label>
	);
};
