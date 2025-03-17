"use client";

import { throttle } from "@/utils";
import { useCallback, useEffect, useState } from "react";

export const useBreakpoint = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = useCallback(
		throttle(() => {
			setIsMobile(window.innerWidth <= 1024);
		}, 500),
		[],
	);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return {
		isMobile,
	};
};
