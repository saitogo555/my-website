"use client";

import { type ReactNode, createContext, useEffect, useState } from "react";

type Props = {
	children: ReactNode;
};

type SidebarContextProps = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const open = () => {
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
	};

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === "b") {
				e.preventDefault();
				setIsOpen((prevIsOpen) => !prevIsOpen);
			}
		};

		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	useEffect(() => {
		setIsOpen(window.innerWidth > 1024);
	}, []);

	return <SidebarContext value={{ isOpen, open, close, toggle }}>{children}</SidebarContext>;
};
