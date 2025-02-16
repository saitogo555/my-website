import { type ReactNode, memo } from "react";
import { BiSolidError } from "react-icons/bi";

type Props = {
	children?: ReactNode;
};

export const FormError = memo(({ children }: Props) => {
	return (
		<p className="mt-1 inline-flex items-center gap-1 text-red-600">
			<BiSolidError className="text-2xl text-red-700" />
			{children}
		</p>
	);
});
