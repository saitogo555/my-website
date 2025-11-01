import { Chip } from "@/components/ui/Chip";
import { Image } from "@/components/ui/Image";

type Props = {
	name: string;
	iconSrc: string;
	version?: string;
};

export function TechnologyChip({ name, iconSrc, version }: Props) {
	return (
		<Chip className="flex h-8 items-center text-base">
			<Image src={iconSrc} alt={name} className="mr-2 h-5" />
			<span>{name}</span>
			{version && <span className="ml-1 text-gray-500">{version}</span>}
		</Chip>
	);
}
