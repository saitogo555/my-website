import { SidebarContext } from "@/context/SidebarContext/SidebarContext";
import { useContext } from "react";

export const useSidebar = () => useContext(SidebarContext);
