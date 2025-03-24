import type { ReactNode } from "react";

type Props = {
  pathname: string;
  children?: ReactNode;
}

export const TerminalLine = ({ pathname, children }: Props) => {
	return (
		<div className="flex text-primary-text text-sm">
			<span className="text-green-400">visitor@saitogo.me</span>
			<span>:</span>
			<span className="text-blue-400">{pathname}</span>
			<span>$</span>
			<span className="ml-2 grow">{children}</span>
		</div>
	);
};
