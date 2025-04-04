import type { ExternalLink } from "@/types/link";

export type ExternalLinkWithIcon = ExternalLink & { iconSrc: string };

export const GITHUB_LINK: ExternalLinkWithIcon = {
	text: "GitHub",
	href: "https://github.com/saitogo555",
	iconSrc: "/images/logo/github-logo.svg",
};

export const X_LINK: ExternalLinkWithIcon = {
	text: "X",
	href: "https://x.com/saitogo555",
	iconSrc: "/images/logo/x-logo.svg",
};

export const LINKEDIN_LINK: ExternalLinkWithIcon = {
	text: "LinkedIn",
	href: "https://www.linkedin.com/in/saitogo/",
	iconSrc: "/images/logo/linkedin-logo.svg",
};

export const NPM_LINK: ExternalLinkWithIcon = {
	text: "npm",
	href: "https://www.npmjs.com/~saitogo",
	iconSrc: "/images/logo/npm-logo.svg",
};

export const ZENN_LINK: ExternalLinkWithIcon = {
	text: "Zenn",
	href: "https://zenn.dev/saitogo",
	iconSrc: "/images/logo/zenn-logo.svg",
};

export const GRAVATAR_LINK: ExternalLinkWithIcon = {
	text: "Gravatar",
	href: "https://gravatar.com/saitogo555",
	iconSrc: "/images/logo/gravatar-logo.svg",
};
