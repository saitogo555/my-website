import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import { AwardSection } from "@/features/about/components/AwardSection";
import { CareerSection } from "@/features/about/components/CareerSection";
import { ProfileSection } from "@/features/about/components/ProfileSection";

export const metadata: Metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<Container>
			<PageTitle text="About" />
			<ProfileSection />
			<CareerSection />
			<AwardSection />
		</Container>
	);
}
