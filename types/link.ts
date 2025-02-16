type BaseLink = {
	text: string;
};

export type AnchorLink = BaseLink & {
	to: `#${string}`;
};

export type NavigationLink = BaseLink & {
	to: `/${string}`;
};

export type ExternalLink = BaseLink & {
	href: `https://${string}`;
};
