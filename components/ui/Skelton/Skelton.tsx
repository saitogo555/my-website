import { cn } from "@/utils";

type Props = {
	className?: string;
};

export const Skelton = ({ className }: Props) => {
	return (
		<div className={cn("animate-skelton overflow-hidden rounded-lg", className)}>
			<div className="h-full w-full bg-secondary/50 dark:bg-primary/50" />
		</div>
	);
};
