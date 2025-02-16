import type { ToastNoticeType } from "@/context/ToastNoticeContext/ToastNoticeContext";
import { type ReactNode, memo } from "react";
import { VscError, VscInfo, VscWarning } from "react-icons/vsc";

type Props = {
	variant: ToastNoticeType;
};

const icons: Record<ToastNoticeType, ReactNode> = {
	info: <VscInfo className="text-blue-500" />,
	warning: <VscWarning className="text-yellow-400" />,
	error: <VscError className="text-red-400" />,
};

export const ToastNoticeIcon = memo(({ variant }: Props) => {
	return <span className="text-2xl">{icons[variant]}</span>;
});
