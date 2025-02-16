import type { WorkData } from "../../types";
import { TechnologyChip } from "../TechnologyChip";

type Props = {
	technologies: WorkData["technologies"];
};

export const TechnologyList = ({ technologies }: Props) => {
	return (
		<ul className="flex gap-2">
			{technologies.map((tech, i) => (
				<li key={i.toString()}>
					<TechnologyChip name={tech.name} iconSrc={tech.iconSrc} version={tech.version} />
				</li>
			))}
		</ul>
	);
};
