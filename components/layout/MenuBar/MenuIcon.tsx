import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";

type Props = {
	iconSrc: string;
	alt: string;
};

export const MenuIcon = ({ iconSrc, alt }: Props) => {
	return (
		<Image
			className={cn("w-4", "max-medium:w-5")}
			src={iconSrc}
			alt={alt}
			skeltonSize={{ width: "1rem", aspectRatio: "1/1" }}
		/>
	);
};
