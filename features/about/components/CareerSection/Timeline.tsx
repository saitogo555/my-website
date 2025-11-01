import { InView } from "@/components/utils/InView";
import { TimelineItem } from "./TimelineItem";

const items: {
	year: number;
	month: number;
	title: string;
	description: string;
}[] = [
	{
		year: 2017,
		month: 4,
		title: "愛知県立愛知総合工科高等学校 入学",
		description: "電子情報科の情報通信コースを選択し、電気や情報に関することを学習。",
	},
	{
		year: 2020,
		month: 3,
		title: "愛知県立愛知総合工科高等学校 卒業",
		description: "WebサイトやWebアプリの制作技能を身につける。",
	},
	{
		year: 2020,
		month: 4,
		title: "株式会社ジェイテクト 入社",
		description: "企業内学園で電気科マルチコースを専攻し、電気や保全について学習。",
	},
	{
		year: 2020,
		month: 5,
		title: "愛知県立愛知総合工科高等学校 講師活動 開始",
		description:
			"技能五輪ウェブデザイン職種をはじめとした、プログラミングを教える活動を母校で開始。",
	},
	{
		year: 2021,
		month: 3,
		title: "株式会社ジェイテクト 試作部 配属",
		description: "自動車部品の試作品組立業務に従事。",
	},
	{
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		title: "株式会社ジェイテクト 在籍",
		description: "自動車部品の試作品組立およびWebアプリやマクロによるDXを推進する。",
	},
];

export function Timeline() {
	return (
		<div>
			{items.map((item, i) => (
				<InView key={i.toString()}>
					<TimelineItem
						year={item.year}
						month={item.month}
						title={item.title}
						description={item.description}
						isCurrent={i === items.length - 1}
					/>
				</InView>
			))}
		</div>
	);
}
