import { NAVIGATION_LINKS } from "@/constants/navigation";
import { SidebarAccordionMenu } from "./SidebarAccordionMenu";
import { SidebarNavigationLink } from "./SidebarNavigationLink";

export const SidebarNavigation = () => {
	return (
		<SidebarAccordionMenu title="SAITOGO.ME">
			<nav>
				{NAVIGATION_LINKS.map((item) => (
					<SidebarNavigationLink
						text={item.text}
						to={item.to}
						iconSrc={item.iconSrc}
						key={item.to}
					/>
				))}
			</nav>
		</SidebarAccordionMenu>
	);
};
