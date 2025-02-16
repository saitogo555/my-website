import { useTableOfContents } from "@/hooks/useTableContents";
import { SidebarAccordionMenu } from "./SidebarAccordionMenu";
import { SidebarAnchorLink } from "./SidebarAnchorLink";

export const SidebarAnchorMenu = () => {
	const toc = useTableOfContents();

	return (
		<SidebarAccordionMenu title="ページ内リンク">
			{toc.length > 0 ? (
				toc.map((item) => <SidebarAnchorLink text={item.text} to={item.to} key={item.to} />)
			) : (
				<p className="mx-6 mt-2 text-sm text-theme-text-primary opacity-60">
					このページの見出しが見つかりません
				</p>
			)}
		</SidebarAccordionMenu>
	);
};
