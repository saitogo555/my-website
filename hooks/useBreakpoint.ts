"use client";

import { useEffect, useState } from "react";
import { throttle } from "@/utils";

export const useBreakpoint = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		throttle(() => {
			setIsMobile(window.innerWidth <= 1024);
		}, 500);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: React Compiler handles optimization
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		isMobile,
	};
};
