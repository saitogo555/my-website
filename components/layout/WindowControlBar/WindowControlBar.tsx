import { cn } from "@/utils";
import { VscChromeClose, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import { WindowControlButton } from "./WindowControlButton";

type Props = {
	className?: string;
};

export function WindowControlBar({ className }: Props) {
	return (
		<div className={cn("flex h-full", className)}>
			<WindowControlButton
				className="cursor-default"
				icon={<VscChromeMinimize />}
				aria-label="minimize button"
			/>
			<WindowControlButton
				className="cursor-default"
				icon={<VscChromeRestore />}
				aria-label="maximize button"
			/>
			<WindowControlButton
				className={cn("cursor-default", "hover:bg-red-700/100")}
				icon={<VscChromeClose />}
				aria-label="close button"
			/>
		</div>
	);
};
