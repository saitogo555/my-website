import { Section, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/utils";
import { AwardCard } from "./AwardCard";

const items: { title: string; eventName: string; description: string }[] = [
	{
		title: "ETロボコン 東海地区大会プライマリークラス 特別賞",
		eventName: "ETロボコン2018",
		description:
			"東海地区大会プライマリークラスでリザルトタイムが第3位。高校生以下では第1位という結果を残した。",
	},
	{
		title: "若年者ものづくり競技大会 ウェブデザイン職種 敢闘賞",
		eventName: "第14回 若年者ものづくり競技大会",
		description:
			"スピードテストやSPA仕様のWebサイトを制作、プレゼンテーションという課題で敢闘賞を受賞した。",
	},
];

export function AwardSection() {
	return (
		<Section>
			<SectionTitle text="Award" />
			<div className={cn("grid grid-cols-2 gap-6", "max-medium:grid-cols-1")}>
				{items.map((item, i) => (
					<AwardCard
						title={item.title}
						subtitle={item.eventName}
						description={item.description}
						key={i.toString()}
					/>
				))}
			</div>
		</Section>
	);
}
