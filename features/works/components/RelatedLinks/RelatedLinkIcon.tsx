import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

type Props = {
	link: string;
};

export const RelatedLinkIcon = ({ link }: Props) => {
	let Icon = null;
	try {
		const url = new URL(link);
		const hostname = url.hostname;

		switch (hostname) {
			case "github.com":
				Icon = FaGithub;
				break;
			default:
				Icon = AiOutlineGlobal;
				break;
		}
	} catch (error) {
		console.error("Invalid URL:", error);
		Icon = AiOutlineGlobal;
	}

	return Icon ? <Icon className="text-xl" /> : null;
};
