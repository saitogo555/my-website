import { Card, CardContent } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section, SectionTitle } from "@/components/ui/Section";
import { TypingText } from "@/components/ui/TypingText";
import { Gallery } from "@/features/works/components/Gallery";
import { RelatedLinks } from "@/features/works/components/RelatedLinks";
import { RoleList } from "@/features/works/components/RoleList";
import { TechnologyList } from "@/features/works/components/TechnologyList";
import { workList } from "@/features/works/constants";
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
	const data = workList.find((item) => item.id === id);
	return {
		title: data ? data.title : "Not Found",
	};
}

export async function generateStaticParams() {
	return workList.map((item) => ({
		id: item.id,
	}));
}

const WorkIdPage = async ({ params }: Props) => {
	const { id } = await params;
	const data = workList.find((item) => item.id === id);

	if (!data) return notFound();

	return (
		<Container>
			<PageTitle text={data.title} />
			<Section className={cn("flex gap-8", "max-medium:flex-col")}>
				<div className="basis-3/5 overflow-hidden rounded-lg">
					<Image src={data.thumbnail.src} alt={data.thumbnail.title} />
				</div>
				<Card className="basis-2/5">
					<CardContent>
						<SectionTitle text="Details" />
						<div className="flex flex-col gap-8">
							<div>
								<h3 className="font-bold text-lg text-theme-text-primary">役割</h3>
								<RoleList roles={data.roles} />
							</div>
							<div>
								<h3 className="font-bold text-lg text-theme-text-primary">使用技術</h3>
								<TechnologyList technologies={data.technologies} />
							</div>
							<div>
								<h3 className="font-bold text-lg text-theme-text-primary">リンク</h3>
								<RelatedLinks links={data.links} />
							</div>
						</div>
					</CardContent>
				</Card>
			</Section>
			<Section>
				<SectionTitle text="Description" />
				{data.details.map((text, i) => (
					<TypingText
						className="mb-6 text-lg text-theme-text-primary"
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
