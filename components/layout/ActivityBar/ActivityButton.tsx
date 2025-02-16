import { type ButtonHTMLAttributes, type ReactNode, memo } from "react";
import { ActivityIcon } from "./ActivityIcon";

type Props = {
	icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ActivityButton = memo(({ icon, ...props }: Props) => {
	return (
		<button {...props}>
			<ActivityIcon icon={icon} />
		</button>
	);
});
