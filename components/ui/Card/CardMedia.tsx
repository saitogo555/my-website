import { cn } from "@/utils";
import { Image } from "../Image";

type Props = {
	className?: string;
	src: string;
	title?: string;
	alt: string;
	skeltonSize?: {
		width?: string;
		height?: string;
		aspectRatio?: string;
	};
};

export function CardMedia({ className, src, title, alt, skeltonSize }: Props) {
	return (
		<div className={cn("w-full", className)}>
			<Image className="w-full" src={src} alt={alt} title={title} skeltonSize={skeltonSize} />
		</div>
	);
};
