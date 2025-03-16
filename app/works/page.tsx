import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section } from "@/components/ui/Section";
import { WorkCard } from "@/features/works/components/WorkCard";
import { WORK_LIST } from "@/features/works/constants";
import { cn } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Works",
};

const WorksPage = () => {
	return (
		<Container>
			<PageTitle text="Works" />
			<Section>
				<div
					className={cn(
						"grid grid-cols-3 gap-8",
						"max-medium:grid-cols-2 min-medium:@max-medium:grid-cols-2",
						"max-small:grid-cols-1 min-medium:@max-small:grid-cols-1",
					)}
				>
					{WORK_LIST.map((item, i) => (
						<WorkCard data={item} key={i.toString()} />
					))}
				</div>
			</Section>
		</Container>
	);
};

export default WorksPage;
