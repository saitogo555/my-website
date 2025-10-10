import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { ActivityIcon } from "./ActivityIcon";

type Props = {
	icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ActivityButton = ({ icon, ...props }: Props) => {
	return (
		<button {...props}>
			<ActivityIcon icon={icon} />
		</button>
	);
};
