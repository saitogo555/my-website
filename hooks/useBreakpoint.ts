"use client";

import { throttle } from "@/utils";
import { useEffect, useState } from "react";

export const useBreakpoint = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = throttle(() => {
			setIsMobile(window.innerWidth <= 1024);
		}, 500);

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
