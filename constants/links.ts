import type { ExternalLink } from "@/types/link";

type ExternalLinkWithIcon = ExternalLink & { iconSrc: string };

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
