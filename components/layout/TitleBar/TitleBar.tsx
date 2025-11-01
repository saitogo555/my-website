import { cn } from "@/utils";
import { MenuBar } from "../MenuBar";
import { SearchBar } from "../SearchBar";
import { WindowControlBar } from "../WindowControlBar";
import { TitleLogo } from "./TitleLogo";

export function TitleBar() {
	return (
		<div
			className={cn(
				"relative z-40 flex h-(--viewport-top-height) items-center justify-between gap-2",
				"border-divider border-b bg-primary",
			)}
		>
			<div className={cn("flex grow basis-1/5 items-center")}>
				<TitleLogo />
				<MenuBar className="grow" />
			</div>
			<SearchBar className="grow basis-3/5" />
			<WindowControlBar className={cn("grow basis-1/5 justify-end")} />
		</div>
	);
};
