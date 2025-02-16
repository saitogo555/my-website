import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input: ClassValue[]): string => {
	return twMerge(clsx(...input));
};

export const wait = async (ms: number) => {
	await new Promise((resolve) => setTimeout(resolve, ms));
};

export const getPageNameFromPath = (path: string): string => {
	const pathSegments = path.toString().split("/");
	const pageName = pathSegments[pathSegments.length - 1];
	const value = pageName === "" ? "Home" : pageName;
	return value.charAt(0).toUpperCase() + value.slice(1);
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
	func: T,
	limit: number,
): ((...args: Parameters<T>) => void) => {
	let inThrottle = false;

	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;

			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
};
