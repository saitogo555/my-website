import { cn } from "@/utils";
import { FiExternalLink } from "react-icons/fi";
import { RelatedLinkIcon } from "./RelatedLinkIcon";

type Props = {
	links: string[];
};

export const RelatedLinks = ({ links }: Props) => {
	return (
		<>
			{links ? (
				<ul>
					{links.map((link, i) => (
						<li key={i.toString()}>
							<a
								className={cn(
									"mt-2 flex items-center gap-1 text-theme-text-primary/70 underline",
									"hover:text-theme-accent",
								)}
								href={link}
								target="_blank"
								rel="noreferrer noopener"
							>
								<RelatedLinkIcon link={link} />
								{link}
								<FiExternalLink />
							</a>
						</li>
					))}
				</ul>
			) : (
				<p className="mt-2 text-theme-text-primary">リンクはありません</p>
			)}
		</>
	);
};
