import { use } from "react";
import { SidebarContext } from "@/provider/SidebarProvider";

export const useSidebar = () => {
	const context = use(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};
