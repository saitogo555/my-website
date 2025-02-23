import NextImage from "next/image";
import type { HTMLAttributes } from "react";

type Props = {
	className?: string;
	src: string;
	alt: string;
} & HTMLAttributes<HTMLDivElement>;

export const Image = ({ className, src, alt, ...props }: Props) => {
	return (
		<div className={className} {...props}>
			<NextImage className="!relative" src={src} alt={alt} fill />
		</div>
	);
};
