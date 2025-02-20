import { cn } from "@/utils";
import { type ReactNode, memo, useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

type Props = {
	title: string;
	children?: ReactNode;
};

export const SidebarAccordionMenu = memo(({ title, children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const handleToggleNavigation = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<div
			className={cn(
				"flex flex-col overflow-hidden border-t border-t-theme-border transition-all duration-200",
				"first-of-type:border-t-0",
				isOpen ? "h-full" : "h-6 max-medium:h-12",
			)}
		>
			<button
				className={cn(
					"flex cursor-pointer items-center font-bold text-theme-text-primary text-xs",
					"max-medium:text-base",
				)}
				type="button"
				onClick={handleToggleNavigation}
			>
				<VscChevronRight
					className={cn(
						"h-6 translate-y-0 px-1 text-2xl",
						{
							"rotate-90": isOpen,
						},
						"max-medium:h-12 max-medium:text-3xl",
					)}
				/>
				{title}
			</button>
			<div
				className={cn(
					"grow overflow-y-auto",
					"scrollbar-thin scrollbar-thumb-neutral-400/30 scrollbar-track-transparent",
				)}
			>
				{children}
			</div>
		</div>
	);
});
