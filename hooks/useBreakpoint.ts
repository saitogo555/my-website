"use client";

import { useEffect, useState } from "react";
import { throttle } from "@/utils";

export const useBreakpoint = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateBreakpoint = () => {
			setIsMobile(window.innerWidth <= 1024);
		};
		
		updateBreakpoint();
		const handleResize = throttle(updateBreakpoint, 500);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		isMobile,
	};
};
