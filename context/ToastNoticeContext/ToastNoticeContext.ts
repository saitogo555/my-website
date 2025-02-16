import { createContext } from "react";

export type ToastNoticeType = "info" | "warning" | "error";

type ToastNoticeContextProps = {
	add: (options: { type?: ToastNoticeType; message: string }) => void;
};

export const ToastNoticeContext = createContext<ToastNoticeContextProps>({
	add: () => {},
});
