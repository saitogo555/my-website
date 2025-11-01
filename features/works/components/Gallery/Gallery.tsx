import Link from "next/link";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { Card, CardContent, CardMedia } from "@/components/ui/Card";
import { TypingText } from "@/components/ui/TypingText";
import { cn } from "@/utils";
import type { WorkImage } from "../../types";

type Props = {
	id: string;
	images: WorkImage[];
};

export function Gallery({ id, images }: Props) {
	return (
		<div
			className={cn(
				"grid grid-cols-3 gap-8",
				"max-medium:grid-cols-2 min-medium:@max-medium:grid-cols-2",
				"max-small:grid-cols-1 min-medium:@max-small:grid-cols-1",
			)}
		>
			{images.map((image, i) => (
				<Link key={i.toString()} href={`/works/${id}/images/${i + 1}`}>
					<Card className="group cursor-pointer">
						<div className="relative overflow-hidden">
							<CardMedia
								className={cn(
									"transition-all duration-300",
									"group-hover:scale-110 group-hover:brightness-50",
								)}
								src={image.thumbnailSrc}
								alt={image.title}
							/>
							<div
								className={cn(
									"absolute top-0 left-0 flex h-full w-full items-center justify-center",
									"opacity-0 transition-opacity duration-500",
									"group-hover:opacity-100",
								)}
							>
								<PiMagnifyingGlassPlus className="text-7xl text-neutral-300" />
							</div>
						</div>
						<CardContent>
							<TypingText className="text-center text-accent-text" tag="p" text={image.title} />
						</CardContent>
					</Card>
				</Link>
			))}
		</div>
	);
}
