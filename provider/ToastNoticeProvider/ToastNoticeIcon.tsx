import type { ReactNode } from "react";
import { VscError, VscInfo, VscWarning } from "react-icons/vsc";
import type { ToastNoticeType } from "./ToastNoticeProvider";

type Props = {
	variant: ToastNoticeType;
};

const icons: Record<ToastNoticeType, ReactNode> = {
	info: <VscInfo className="text-blue-500" />,
	warning: <VscWarning className="text-yellow-400" />,
	error: <VscError className="text-red-400" />,
};

export function ToastNoticeIcon({ variant }: Props) {
	return <span className="text-2xl">{icons[variant]}</span>;
}
