import { cn } from "@/utils";
import { Image } from "../Image";

type Props = {
	className?: string;
	src: string;
	title?: string;
	alt: string;
	aspectRatio?: string;
};

export const CardMedia = ({ className, src, title, alt, aspectRatio }: Props) => {
	return (
		<div className={cn("w-full", className)}>
			<Image src={src} alt={alt} title={title} aspectRatio={aspectRatio} />
		</div>
	);
};
