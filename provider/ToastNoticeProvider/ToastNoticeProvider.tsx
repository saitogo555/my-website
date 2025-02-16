"use client";

import { ToastNoticeContext, type ToastNoticeType } from "@/context/ToastNoticeContext";
import { type ReactNode, useCallback, useState } from "react";
import { ToastNoticeItem } from "./ToastNoticeItem";

type Props = {
	children: ReactNode;
};

type ToastNotice = {
	id: number;
	type: ToastNoticeType;
	message: string;
};

export const ToastNoticeProvider = ({ children }: Props) => {
	const [toastNotices, setToastNotices] = useState<ToastNotice[]>([]);

	const add = useCallback((options: { type?: ToastNoticeType; message: string }) => {
		const { type = "info", message } = options;
		const id = new Date().getTime();

		setToastNotices((prevToastNotices) => [{ id, type, message }, ...prevToastNotices]);
		setTimeout(() => remove(id), 3000);
	}, []);

	const remove = (id: number) => {
		setToastNotices((prev) => prev.filter((toast) => toast.id !== id));
	};

	return (
		<ToastNoticeContext value={{ add }}>
			{children}
			<div className="fixed right-2 bottom-8 z-30 flex flex-col gap-4">
				{toastNotices.map((toastNotice) => (
					<ToastNoticeItem
						variant={toastNotice.type}
						title="Info"
						message={toastNotice.message}
						onClose={() => remove(toastNotice.id)}
						key={toastNotice.id}
					/>
				))}
			</div>
		</ToastNoticeContext>
	);
};
