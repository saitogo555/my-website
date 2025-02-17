import NextImage from "next/image";
import type { ImgHTMLAttributes } from "react";

type Props = {
  className?: string;
	src: string;
	alt: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height">;

export const Image = ({ className, src, alt, ...props }: Props) => {
	return (
		<div className={className}>
			<NextImage className="!relative" src={src} alt={alt} fill {...props} />
		</div>
	);
};
