import { Chip } from "@/components/ui/Chip";

type Props = {
	name: string;
	iconSrc: string;
	version?: string;
};

export const TechnologyChip = ({ name, iconSrc, version }: Props) => {
	return (
		<Chip className="flex items-center">
			<img src={iconSrc} alt={name} className="mr-2 h-4" />
			<span>{name}</span>
			{version && <span className="ml-1">{version}</span>}
		</Chip>
	);
};
