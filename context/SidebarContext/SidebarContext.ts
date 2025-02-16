import { createContext } from "react";

type SidebarContextProps = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
	isOpen: false,
	open: () => {},
	close: () => {},
	toggle: () => {},
});
