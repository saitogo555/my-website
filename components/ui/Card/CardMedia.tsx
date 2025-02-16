import { cn } from "@/utils";

type Props = {
	className?: string;
	src: string;
	title?: string;
	alt: string;
};

export const CardMedia = ({ className, src, title, alt }: Props) => {
	return (
		<div className={cn("w-full", className)}>
			<img src={src} alt={alt} title={title} />
		</div>
	);
};
