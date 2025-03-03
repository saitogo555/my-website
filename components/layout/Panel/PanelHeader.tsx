import { cn } from "@/utils";
import { VscClose } from "react-icons/vsc";

type Props = {
  onClose: () => void
}

const items: string[] = [
	"問題",
	"出力",
	"デバッグコンソール",
	"ターミナル",
	"ポート",
	"SPELL CHECKER",
	"GITLENS",
	"コメント",
];

export const PanelHeader = ({ onClose }: Props) => {
	return (
		<div className="flex items-center justify-between px-6 py-1">
			<ul className="flex items-center gap-6">
				{items.map((item) => (
					<li
						className={cn("cursor-pointer text-primary-text/60 text-xs", "hover:text-primary-text")}
						key={item}
					>
						{item}
					</li>
				))}
			</ul>
			<button
				className={cn("cursor-pointer rounded p-1 text-primary-text transition", "hover:bg-neutral-300/10")}
				type="button"
				aria-label="ターミナルを閉じる"
        onClick={onClose}
			>
				<VscClose className="text-primary-text" />
			</button>
		</div>
	);
};
