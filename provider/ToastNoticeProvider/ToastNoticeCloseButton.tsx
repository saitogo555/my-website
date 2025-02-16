import type { MouseEventHandler } from "react";
import { VscClose } from "react-icons/vsc";

type Props = {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ToastNoticeCloseButton = ({ onClick }: Props) => {
	return (
		<button
			className="ml-auto rounded p-0.5 text-xl hover:bg-neutral-300/10"
			type="button"
			onClick={onClick}
		>
			<VscClose className="text-theme-text-primary" />
		</button>
	);
};
