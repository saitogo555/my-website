"use client";

import { SidebarContext } from "@/context/SidebarContext";
import { type ReactNode, useEffect, useState } from "react";

type Props = {
	children: ReactNode;
};

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
		setIsOpen(window.innerWidth > 1024);
	}, []);

	return <SidebarContext value={{ isOpen, open, close, toggle }}>{children}</SidebarContext>;
};
