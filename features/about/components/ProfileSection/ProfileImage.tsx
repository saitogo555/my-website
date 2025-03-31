import { Card } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";

export const ProfileImage = () => {
	return (
		<Card>
			<Image
				className="grow overflow-hidden rounded-lg"
				src="/images/about/profile-ghibli.webp"
				alt="My Icon"
			/>
		</Card>
	);
};
