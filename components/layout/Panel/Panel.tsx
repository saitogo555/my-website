"use client";

import { useCallback, useEffect, useState } from "react";
import { PanelHeader } from "./PanelHeader";
import { cn } from "@/utils";
import { PanelContent } from "./PanelContent";

export const Panel = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);

	const closePanel = () => setIsOpen(false);

	const handleKeydown = useCallback(
		(e: KeyboardEvent) => {
			if (!(e.ctrlKey && e.key === "@")) return
			e.preventDefault()
			togglePanel();
		},
		[togglePanel],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [handleKeydown]);

	return (
		<div className={cn("flex h-96 flex-col border-t border-t-divider bg-primary", { "hidden": !isOpen })}>
			<PanelHeader onClose={closePanel} />
			<PanelContent />
		</div>
	);
};
