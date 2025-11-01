import { NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/utils";
import { TabItem } from "./TabItem";

export function TabBar() {
	return (
		<div
			className={cn(
				"relative z-0 flex w-full shrink-0 overflow-x-auto",
				"border-divider border-b bg-primary",
				"scrollbar-thin scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
			)}
		>
			{NAVIGATION_LINKS.map((item) => (
				<TabItem text={item.text} to={item.to} iconSrc={item.iconSrc} key={item.to} />
			))}
		</div>
	);
};
