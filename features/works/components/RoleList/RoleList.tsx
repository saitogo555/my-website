import { Chip } from "@/components/ui/Chip";
import type { WorkData } from "../../types";

type Props = {
	roles: WorkData["roles"];
};

export function RoleList({ roles }: Props) {
	return (
		<ul className="flex gap-2">
			{roles.map((role, i) => (
				<li key={i.toString()}>
					<Chip className="flex h-8 items-center">{role}</Chip>
				</li>
			))}
		</ul>
	);
}
