import { cn } from "@/utils";
import { VscRemote, VscSourceControl } from "react-icons/vsc";

export const StatusBar = () => {
	return (
		<div className="relative z-30 flex h-(--viewport-bottom-height) justify-between border-divider border-t bg-primary">
			<div className="flex gap-1">
				<div
					className={cn(
						"flex cursor-default items-center gap-1 bg-accent px-3 text-sm text-accent-text",
						"hover:contrast-75",
						"max-medium:text-lg",
					)}
				>
					<VscRemote />
					WSL: Ubuntu
				</div>
				<a
					className={cn(
						"flex items-center gap-1 px-2 text-neutral-400 text-sm",
						"hover:bg-neutral-300/10",
						"max-medium:text-lg",
					)}
					href="https://github.com/saitogo555"
					target="_blank"
					rel="noopener noreferrer"
				>
					<VscSourceControl />
					main
				</a>
			</div>
			<div
				className={cn(
					"flex items-center gap-1 px-2 text-neutral-400 text-sm",
					"hover:bg-neutral-300/10",
					"max-medium:text-lg",
				)}
			>
				&copy; 2024 SAITOGO
			</div>
		</div>
	);
};
