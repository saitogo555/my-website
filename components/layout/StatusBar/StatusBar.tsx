import { VscRemote, VscSourceControl } from "react-icons/vsc";
import { cn } from "@/utils";
import { Copyright } from "./Copyright";

export function StatusBar() {
	return (
		<div className="relative z-30 flex h-(--viewport-bottom-height) justify-between border-divider border-t bg-primary">
			<div className="flex gap-1">
				<a
					className={cn(
						"flex items-center gap-1 bg-accent px-3 text-accent-text text-sm",
						"hover:contrast-75",
						"max-medium:text-lg",
					)}
					href="https://vercel.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<VscRemote />
					Running on Vercel
				</a>
				<a
					className={cn(
						"flex items-center gap-1 px-2 text-neutral-400 text-sm",
						"hover:bg-neutral-300/10",
						"max-medium:text-lg",
					)}
					href="https://github.com/saitogo555/my-website"
					target="_blank"
					rel="noopener noreferrer"
				>
					<VscSourceControl />
					main
				</a>
			</div>
			<Copyright />
		</div>
	);
}
