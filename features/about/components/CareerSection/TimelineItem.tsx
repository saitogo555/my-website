import { Card } from "@/components/ui/Card";
import { TypingText } from "@/components/ui/TypingText";
import { cn } from "@/utils";
import { TimelineLabel } from "./TimelineLabel";

type Props = {
	year: number;
	month: number;
	title: string;
	description: string;
	isCurrent?: boolean;
};

export function TimelineItem({ year, month, title, description, isCurrent }: Props) {
	const yyyy = year;
	const mm = `00${month}`.slice(-2);

	return (
		<div className="flex gap-2">
			<div className="flex flex-col">
				<div className="relative h-6 w-6">
					<div className="absolute h-full w-full rounded-full bg-accent" />
					{isCurrent && (
						<div
							className={cn(
								"absolute top-1/2 left-1/2 z-[1] h-5/7 w-5/7",
								"-translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary",
							)}
						/>
					)}
				</div>
				{!isCurrent && <div className="mx-auto w-0.5 grow bg-accent/30" />}
			</div>
			<div className="w-full">
				<div className="flex items-center gap-2">
					<TypingText className="text-2xl leading-none" tag="h3" text={`${yyyy}/${mm}`} />
					{isCurrent ? (
						<TimelineLabel>main</TimelineLabel>
					) : (
						<TimelineLabel className="bg-accent hue-rotate-30">origin/main</TimelineLabel>
					)}
				</div>
				<Card className="mt-4 mb-10 w-full p-8 max-small:p-5">
					<TypingText className="mb-4 font-bold text-xl" tag="h3" text={title} />
					<TypingText className="" tag="p" text={description} />
				</Card>
			</div>
		</div>
	);
};
