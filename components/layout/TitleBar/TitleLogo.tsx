"use client";

import { Image } from "@/components/ui/Image";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/utils";
import Link from "next/link";

export const TitleLogo = () => {
	const sidebar = useSidebar();
	const { isMobile } = useBreakpoint();

	const handleClick = () => {
		isMobile && sidebar.close();
	};

	return (
		<Link className={cn("mx-2 w-7")} href="/" title="Home" onClick={handleClick}>
			<Image className="w-full" src="/images/logo.webp" alt="SAITO GO PORTFOLIO" />
		</Link>
	);
};
