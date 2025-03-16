import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section, SectionTitle } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import { Gallery } from "@/features/works/components/Gallery";
import { RelatedLinks } from "@/features/works/components/RelatedLinks";
import { RoleList } from "@/features/works/components/RoleList";
import { TechnologyList } from "@/features/works/components/TechnologyList";
import { WORK_LIST } from "@/features/works/constants";
import { cn } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const data = WORK_LIST.find((item) => item.id === id);
	return {
		title: data ? data.title : "Not Found",
	};
}

export async function generateStaticParams() {
	return WORK_LIST.map((item) => ({
		id: item.id,
	}));
}

const WorkIdPage = async ({ params }: Props) => {
	const { id } = await params;
	const data = WORK_LIST.find((item) => item.id === id);

	if (!data) return notFound();

	return (
		<Container>
			<PageTitle text={data.title} />
			<Section>
				<div className="relative">
					<Image
						className="overflow-hidden rounded-lg"
						src={data.thumbnail.src}
						alt={data.thumbnail.title}
					/>
					<div
						className={cn(
							"absolute bottom-0 left-0 flex w-full gap-8 p-6 pt-16",
							"bg-gradient-to-t from-black/80 via-black/50 to-transparent",
						)}
					>
						<div>
							<h3 className="font-bold text-lg text-primary-text">役割</h3>
							<RoleList roles={data.roles} />
						</div>
						<div>
							<h3 className="font-bold text-lg text-primary-text">使用技術</h3>
							<TechnologyList technologies={data.technologies} />
						</div>
					</div>
				</div>
				<div className="mt-8">
					<RelatedLinks links={data.links} />
				</div>
			</Section>
			<Section>
				<SectionTitle text="Description" />
				{data.details.map((text, i) => (
					<TypingText
						className="mb-6 text-lg text-primary-text"
						key={i.toString()}
						tag="p"
						text={text}
					/>
				))}
			</Section>
			<Section>
				<SectionTitle text="Gallery" />
				<Gallery id={data.id} images={data.images} />
			</Section>
		</Container>
	);
};

export default WorkIdPage;
