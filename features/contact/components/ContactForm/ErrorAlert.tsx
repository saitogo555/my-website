import type { ReactNode } from "react";
import { MdCancel } from "react-icons/md";

type Props = {
	children?: ReactNode;
};

export function ErrorAlert({ children }: Props) {
	return (
		<p className="flex items-center gap-2 rounded-lg bg-red-200 px-4 py-6 font-bold text-lg text-red-700">
			<MdCancel className="text-3xl" />
			{children}
		</p>
	);
}
