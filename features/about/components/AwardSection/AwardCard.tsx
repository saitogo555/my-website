import { GiMedal } from "react-icons/gi";
import { Card, CardContent } from "@/components/ui/Card";
import { TypingText } from "@/components/ui/TypingText";
import { InView } from "@/components/utils/InView";
import { cn } from "@/utils";

type Props = {
	title: string;
	subtitle: string;
	description: string;
	rank?: "gold" | "silver" | "bronze" | "other";
};

export function AwardCard({ title, subtitle, description, rank = "other" }: Props) {
	return (
		<InView>
			<Card className="relative z-0 h-full">
				<GiMedal
					className={cn(
						"-z-10 absolute top-0 right-0 text-9xl opacity-10",
						{ "text-yellow-400": rank === "gold" },
						{ "text-gray-300": rank === "silver" },
						{ "text-orange-600": rank === "bronze" },
						{ "text-cyan-600": rank === "other" },
					)}
				/>
				<CardContent className="">
					<TypingText className="mb-2 text-xl" tag="h3" text={title} />
					<TypingText className="opacity-60" tag="span" text={subtitle} />
					<TypingText className="mt-6" tag="p" text={description} />
				</CardContent>
			</Card>
		</InView>
	);
}
