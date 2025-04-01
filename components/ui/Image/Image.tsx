import type { HTMLAttributes } from "react";

type Props = {
	className?: string;
	src: string;
	alt: string;
} & Omit<HTMLAttributes<HTMLImageElement>, "className" | "src" | "alt" | "loading">;

export const Image = ({ className, src, alt, ...props }: Props) => {
	return <img {...props} className={className} src={src} loading="lazy" alt={alt} />;
};
