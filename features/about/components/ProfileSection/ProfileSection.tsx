"use client";

import { Section, SectionTitle } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import { cn } from "@/utils";
import { BiBriefcase, BiMessageRoundedDetail } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineBloodtype, MdOutlineCake, MdOutlineLocationOn } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";
import { ProfileCard } from "./ProfileCard";
import { ProfileLinks } from "./ProfileLinks";

export const ProfileSection = () => {
	const age = (() => {
		const year = 2001;
		const month = 5;
		const day = 16;
		const birthdate = new Date(year, month - 1, day); // monthは0-11なので、1を引く
		const today = new Date();
		const val = today.getFullYear() - birthdate.getFullYear();
		const monthDiff = today.getMonth() - birthdate.getMonth();
		// 今年の誕生日がまだ来ていない場合、年齢を1つ減らす
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
			return val - 1;
		}
		return val;
	})();

	return (
		<Section className={cn("flex gap-8", "max-medium:flex-col")}>
			<div className="basis-2/5">
				<div className="order-2 flex h-full animate-fade-in-up flex-col">
					<img
						className="grow overflow-hidden rounded-lg object-cover"
						src="/images/about/profile.webp"
						alt="My Icon"
					/>
					<ProfileLinks />
				</div>
			</div>
			<div className="basis-3/5">
				<SectionTitle className="order-1" text="Profile" />
				<div className={cn("order-3 mt-0 grid grid-cols-2 gap-6", "max-small:grid-cols-1")}>
					<div className={cn("col-span-2", "max-small:col-span-1")}>
						<TypingText
							className={cn("font-bold text-3xl")}
							tag="p"
							text="齋藤 豪 (サイトウ ゴウ)"
						/>
					</div>
					<ProfileCard label="年齢" text={age.toString()} icon={<MdOutlineCake />} />
					<ProfileCard label="誕生日" text="2001/05/16" icon={<TbCalendarMonth />} />
					<ProfileCard label="血液型" text="A(+)" icon={<MdOutlineBloodtype />} />
					<ProfileCard label="出身地" text="愛知県 名古屋市" icon={<MdOutlineLocationOn />} />
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="職業"
						text="自動車部品の試作品組立"
						icon={<BiBriefcase />}
					/>
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="趣味"
						text="プログラミング, ゲーム, 旅行, ドライブ, コスプレ"
						icon={<GrGamepad />}
					/>
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="一言"
						text="これからの時代、全てのアプリはWebアプリに置き換わる"
						icon={<BiMessageRoundedDetail />}
					/>
				</div>
			</div>
		</Section>
	);
};
