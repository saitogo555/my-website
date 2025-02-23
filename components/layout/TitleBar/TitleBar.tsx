import { Image } from "@/components/ui/Image";
import { cn } from "@/utils";
import Link from "next/link";
import { MenuBar } from "../MenuBar";
import { SearchBar } from "../SearchBar";
import { WindowControlBar } from "../WindowControlBar";

export const TitleBar = () => {
	return (
		<div
			className={cn(
				"relative z-40 flex h-(--viewport-top-height) items-center justify-between gap-2",
				"border-divider border-b bg-primary",
			)}
		>
			<div className={cn("flex grow basis-1/5 items-center")}>
				<Link className={cn("mx-2 w-7")} href="/" title="Home">
					<Image className="w-full" src="/images/logo.webp" alt="SAITO GO PORTFOLIO" />
				</Link>
				<MenuBar className="grow" />
			</div>
			<SearchBar className="grow basis-3/5" />
			<WindowControlBar className={cn("grow basis-1/5 justify-end")} />
		</div>
	);
};
