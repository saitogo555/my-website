import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ActivityIcon } from "./ActivityIcon";

type Props = {
	icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ActivityButton({ icon, ...props }: Props) {
	return (
		<button {...props}>
			<ActivityIcon icon={icon} />
		</button>
	);
}
