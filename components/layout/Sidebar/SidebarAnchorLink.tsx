import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useSidebar } from "@/hooks/useSidebar";
import type { AnchorLink } from "@/types/link";
import { cn } from "@/utils";
import Link from "next/link";
import { memo, useCallback } from "react";
import { VscSymbolVariable } from "react-icons/vsc";

type Props = {} & AnchorLink;

export const SidebarAnchorLink = memo(({ text, to }: Props) => {
	const sidebar = useSidebar();
	const { isMobile } = useBreakpoint();

	const handleClick = useCallback(() => {
		if (!isMobile) {
			return;
		}
		sidebar.close();
	}, [isMobile, sidebar]);

	return (
		<Link
			className={cn(
				"flex h-6 cursor-pointer items-center pl-9",
				"hover:bg-neutral-300/10",
				"max-medium:h-auto max-medium:py-1",
			)}
			href={to}
			title={text}
			aria-label={text}
			onClick={handleClick}
		>
			<VscSymbolVariable className={cn("text-lg text-sky-300")} />
			<span className={cn("ml-2 text-primary-text text-sm", "max-medium:text-lg")}>{text}</span>
		</Link>
	);
});
