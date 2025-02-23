import { cn } from "@/utils";
import { MenuIcon } from "./MenuIcon";

type Props = {
	text: string;
	iconSrc: string;
	href: string;
};

export const OverflowMenuItem = ({ text, href, iconSrc }: Props) => {
	return (
		<li>
			<a
				className={cn(
					"flex items-center rounded py-0.5 pr-4 pl-8",
					"hover:bg-accent",
					"max-medium:py-2 max-medium:text-lg",
				)}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={text}
			>
				{text}
				<span className={cn("text-xs", "max-medium:text-base")}>(</span>
				<MenuIcon iconSrc={iconSrc} alt={`${text} icon`} />
				<span className={cn("text-xs", "max-medium:text-base")}>)</span>
				<span className="ml-auto">&gt;</span>
			</a>
		</li>
	);
};
