"use client";

import { useCallback, useEffect, useState } from "react";
import { TerminalHeader } from "./TerminalHeader";
import { cn } from "@/utils";

export const Terminal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleTerminal = useCallback(() => setIsOpen((prev) => !prev), []);

	const closeTerminal = () => setIsOpen(false);

	const handleKeydown = useCallback(
		(e: KeyboardEvent) => {
			if (!(e.ctrlKey && e.key === "@")) return
			e.preventDefault()
			toggleTerminal();
		},
		[toggleTerminal],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [handleKeydown]);

	return (
		<div className={cn("h-96 border-t border-t-divider bg-primary", { "hidden": !isOpen })}>
			<TerminalHeader onClose={closeTerminal} />
		</div>
	);
};
