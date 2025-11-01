import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import { SkillSection } from "@/features/skills/components/SkillSection";
import { StarRating } from "@/features/skills/components/StarRating";
import {
	BACKEND_LIST,
	BUILD_TOOL_LIST,
	CI_CD_TOOL_LIST,
	CLOUD_SERVICE_LIST,
	CMS_LIST,
	CSS_PREPROCESSORS_LIST,
	DATABASE_LIST,
	DESKTOP_APPLICATION_LIST,
	FRONTEND_LIST,
	PACKAGE_MANAGER_LIST,
	PROGRAMMING_LANG_LIST,
	STYLING_LIST,
	TEMPLATE_ENGINE_LIST,
	UI_COMPONENT_LIST,
	VERSIONING_LIST,
	VIRTUALIZATION_LIST,
} from "@/features/skills/constants/SkillsData";
import type { SkillLevel } from "@/features/skills/types/Skill";
import { cn } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Skills",
};

const items: { label: string; text: string }[] = [
	{
		label: "基礎レベル",
		text: "基本的な文法や構造を理解してシンプルなプログラムを書ける",
	},
	{
		label: "応用レベル",
		text: "ライブラリやフレームワークを活用して複雑なプログラムが書ける",
	},
	{
		label: "実務レベル",
		text: "業務での要求に応じて効率的なプログラムを開発・運用できる",
	},
];

export default function SkillsPage() {
	return (
		<Container>
			<PageTitle text="Skills" />
			<Section className="flex flex-col gap-8">
				{items.map((item, i) => (
					<div
						className={cn(
							"flex items-center gap-4",
							"max-small:flex-col max-small:items-start max-small:gap-2",
						)}
						key={i.toString()}
					>
						<div className="max-small:flex max-small:gap-2">
							<StarRating value={(i + 1) as SkillLevel} />
							<TypingText
								className={cn("mt-2 block text-sm", "max-small:inline")}
								tag="span"
								text={item.label}
							/>
						</div>
						<TypingText tag="p" text={item.text} />
					</div>
				))}
			</Section>
			<SkillSection heading="Programming Languages" items={PROGRAMMING_LANG_LIST} />
			<SkillSection heading="Front-end" items={FRONTEND_LIST} />
			<SkillSection heading="Back-end" items={BACKEND_LIST} />
			<SkillSection heading="Styling" items={STYLING_LIST} />
			<SkillSection heading="UI Component" items={UI_COMPONENT_LIST} />
			<SkillSection heading="Desktop Application" items={DESKTOP_APPLICATION_LIST} />
			<SkillSection heading="Template Engine" items={TEMPLATE_ENGINE_LIST} />
			<SkillSection heading="CSS Preprocessor" items={CSS_PREPROCESSORS_LIST} />
			<SkillSection heading="Cloud Service" items={CLOUD_SERVICE_LIST} />
			<SkillSection heading="CMS" items={CMS_LIST} />
			<SkillSection heading="Database" items={DATABASE_LIST} />
			<SkillSection heading="Versioning" items={VERSIONING_LIST} />
			<SkillSection heading="CI/CD" items={CI_CD_TOOL_LIST} />
			<SkillSection heading="Package Manager" items={PACKAGE_MANAGER_LIST} />
			<SkillSection heading="Build Tool" items={BUILD_TOOL_LIST} />
			<SkillSection heading="Virtualization" items={VIRTUALIZATION_LIST} />
		</Container>
	);
};

