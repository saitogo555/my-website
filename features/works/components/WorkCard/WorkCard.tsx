import Link from "next/link";
import { Card, CardContent, CardMedia } from "@/components/ui/Card";
import { TypingText } from "@/components/ui/TypingText";
import { cn } from "@/utils";
import type { WorkData } from "../../types";

type Props = {
	data: WorkData;
};

export function WorkCard({ data }: Props) {
	return (
		<Link href={`/works/${data.id}`}>
			<Card className="group h-full cursor-pointer duration-500" title={data.thumbnail.title}>
				<div className="overflow-hidden">
					<CardMedia
						className={cn(
							"transition-all duration-300",
							"group-hover:scale-110 group-hover:brightness-50",
						)}
						src={data.thumbnail.thumbnailSrc}
						alt={data.thumbnail.title}
					/>
				</div>
				<CardContent>
					<TypingText className="font-bold text-primary-text text-xl" tag="h2" text={data.title} />
					<TypingText
						className="mt-2 block text-primary-text text-sm opacity-50"
						tag="p"
						text={data.summary}
					/>
				</CardContent>
			</Card>
		</Link>
	);
}
