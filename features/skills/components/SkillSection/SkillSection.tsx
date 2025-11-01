import { Section, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/utils";
import type { Skill } from "../../types/Skill";
import { SkillCard } from "../SkillCard";

type Props = {
	heading: string;
	items: Skill[];
};

export function SkillSection({ heading, items }: Props) {
	return (
		<Section>
			<SectionTitle text={heading} />
			<div
				className={cn(
					"grid grid-cols-3 gap-6",
					"max-medium:grid-cols-2 min-medium:@max-medium:grid-cols-2",
					"max-small:grid-cols-1 min-medium:@max-small:grid-cols-1",
				)}
			>
				{items.map((item, i) => (
					<SkillCard text={item.text} iconSrc={item.iconSrc} star={item.star} key={i.toString()} />
				))}
			</div>
		</Section>
	);
};
