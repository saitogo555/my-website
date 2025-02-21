import { ToastNoticeContext } from "@/provider/ToastNoticeProvider";
import { useContext } from "react";

export const useToastNotice = () => {
	const context = useContext(ToastNoticeContext);
	if (!context) {
		throw new Error("useToastNotice must be used within a ToastNoticeProvider");
	}
	return context;
};
