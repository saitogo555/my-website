import { Section, SectionTitle } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import { cn } from "@/utils";
import { BiBriefcase, BiMessageRoundedDetail } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineBloodtype, MdOutlineCake, MdOutlineLocationOn } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";
import { PROFILE } from "../../constants/profile";
import { ProfileCard } from "./ProfileCard";
import { ProfileLinks } from "./ProfileLinks";
import { ProfileImage } from "./ProfileImage";

export const ProfileSection = () => {
	return (
		<Section className={cn("flex gap-8", "max-medium:flex-col", "min-medium:@max-small:flex-col")}>
			<div className="basis-2/5">
				<div className="order-2 flex h-full animate-fade-in-up flex-col">
					<ProfileImage />
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
							text={`${PROFILE.name} (${PROFILE.ruby})`}
						/>
					</div>
					<ProfileCard label="年齢" text={PROFILE.age.toString()} icon={<MdOutlineCake />} />
					<ProfileCard label="誕生日" text={PROFILE.birthday} icon={<TbCalendarMonth />} />
					<ProfileCard label="血液型" text={PROFILE.bloodType} icon={<MdOutlineBloodtype />} />
					<ProfileCard label="出身地" text={PROFILE.birthPlace} icon={<MdOutlineLocationOn />} />
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="職業"
						text={PROFILE.job}
						icon={<BiBriefcase />}
					/>
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="趣味"
						text={PROFILE.hobbies.join(", ")}
						icon={<GrGamepad />}
					/>
					<ProfileCard
						className={cn("col-span-2", "max-small:col-span-1")}
						label="メッセージ"
						text={PROFILE.message}
						icon={<BiMessageRoundedDetail />}
					/>
				</div>
			</div>
		</Section>
	);
};
