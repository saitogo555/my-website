import type { ReactNode } from "react";
import { MdCheckCircle } from "react-icons/md";

type Props = {
	children?: ReactNode;
};

export const SuccessAlert = ({ children }: Props) => {
	return (
		<p className="flex items-center gap-2 rounded-lg bg-green-200 px-4 py-6 font-bold text-green-700 text-lg">
			<MdCheckCircle className="text-3xl" />
			{children}
		</p>
	);
};
