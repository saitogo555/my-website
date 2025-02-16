import { Chip } from "@/components/ui/Chip";
import type { WorkData } from "../../types";

type Props = {
	roles: WorkData["roles"];
};

export const RoleList = ({ roles }: Props) => {
	return (
		<ul className="mt-2 flex gap-2">
			{roles.map((role, i) => (
				<li key={i.toString()}>
					<Chip>{role}</Chip>
				</li>
			))}
		</ul>
	);
};
