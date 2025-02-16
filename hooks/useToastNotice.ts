import { ToastNoticeContext } from "@/context/ToastNoticeContext/ToastNoticeContext";
import { useContext } from "react";

export const useToastNotice = () => useContext(ToastNoticeContext);
