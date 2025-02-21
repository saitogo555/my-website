import { type MouseEventHandler, memo } from "react";
import { ToastNoticeCloseButton } from "./ToastNoticeCloseButton";
import { ToastNoticeIcon } from "./ToastNoticeIcon";
import type { ToastNoticeType } from "./ToastNoticeProvider";

type Props = {
	variant?: ToastNoticeType;
	title: string;
	message: string;
	onClose: MouseEventHandler<HTMLButtonElement>;
};

export const ToastNoticeItem = memo(({ variant = "info", title, message, onClose }: Props) => {
	return (
		<div className="w-[25rem] animate-toast-in border border-neutral-800 bg-theme-secondary p-3 shadow-[0px_0px_12px_3px_#00000080] shadow-neutral-900">
			<div className="flex items-center">
				<ToastNoticeIcon variant={variant} />
				<h2 className="ml-1 break-all text-sm text-theme-text-primary">{title}</h2>
				<ToastNoticeCloseButton onClick={onClose} />
			</div>
			<p className="mt-4 text-sm text-theme-text-primary">{message}</p>
		</div>
	);
});
