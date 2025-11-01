import type { MouseEventHandler } from "react";
import { VscClose } from "react-icons/vsc";

type Props = {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export function ToastNoticeCloseButton({ onClick }: Props) {
	return (
		<button
			className="ml-auto cursor-pointer rounded p-0.5 text-xl hover:bg-neutral-300/10"
			type="button"
			onClick={onClick}
		>
			<VscClose className="text-primary-text" />
		</button>
	);
};
