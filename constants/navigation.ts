import type { NavigationLink } from "@/types/link";

type NavigationLinkWithIcon = NavigationLink & { iconSrc: string };

export const NAVIGATION_LINKS: NavigationLinkWithIcon[] = [
	{ text: "home.html", to: "/", iconSrc: "/images/logo/html-logo.svg" },
	{ text: "about.css", to: "/about", iconSrc: "/images/logo/css-logo.svg" },
	{
		text: "skills.js",
		to: "/skills",
		iconSrc: "/images/logo/javascript-logo.svg",
	},
	{
		text: "works.tsx",
		to: "/works",
		iconSrc: "/images/logo/react-typescript-logo.svg",
	},
	{ text: "contact.php", to: "/contact", iconSrc: "/images/logo/php-logo.svg" },
];
