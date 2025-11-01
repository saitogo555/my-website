import { Image } from "@/components/ui/Image";
import {
	type ExternalLinkWithIcon,
	GITHUB_LINK,
	GRAVATAR_LINK,
	LINKEDIN_LINK,
	NPM_LINK,
	X_LINK,
	ZENN_LINK,
} from "@/constants/links";
import Link from "next/link";

const items: ExternalLinkWithIcon[] = [
	GITHUB_LINK,
	X_LINK,
	LINKEDIN_LINK,
	NPM_LINK,
	ZENN_LINK,
	GRAVATAR_LINK,
];

export function ProfileLinks() {
	return (
		<div className="mt-4 flex flex-wrap gap-4">
			{items.map((item) => (
				<a
					className="rounded-full p-2 transition-all hover:bg-neutral-300/10"
					href={item.href}
					title={item.text}
					target="_blank"
					rel="noopener noreferrer"
					key={item.href}
					aria-label={item.text}
				>
					<Image className="w-7" src={item.iconSrc} alt={item.text} />
				</a>
			))}
			<Link
				className="rounded-full p-2 transition-all hover:bg-neutral-300/10"
				href="/contact"
				title="Contact"
				aria-label="Contact"
			>
				<Image className="w-7 contrast-50" src="/images/logo/mail.svg" alt="contact" />
			</Link>
		</div>
	);
};
