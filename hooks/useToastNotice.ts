import { use } from "react";
import { ToastNoticeContext } from "@/provider/ToastNoticeProvider";

export const useToastNotice = () => {
	const context = use(ToastNoticeContext);
	if (!context) {
		throw new Error("useToastNotice must be used within a ToastNoticeProvider");
	}
	return context;
};
