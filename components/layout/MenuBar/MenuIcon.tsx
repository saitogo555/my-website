import { cn } from "@/utils";
import { memo } from "react";

type Props = {
	iconSrc: string;
	alt: string;
};

export const MenuIcon = memo(({ iconSrc, alt }: Props) => {
	return <img className={cn("w-4", "max-medium:w-5")} src={iconSrc} alt={alt} />;
});
