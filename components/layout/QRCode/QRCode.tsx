import { OutlinedButton } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";
import type { KeyboardEvent, MouseEvent } from "react";

type Props = {
	onClose: () => void;
};

export const QRCode = ({ onClose }: Props) => {
	const handleClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
			onClick={handleClickOverlay}
			onKeyDown={handleKeydown}
		>
			<Card className="mx-4">
				<CardContent>
					<Image className="overflow-hidden rounded-lg" src="/images/qr-code.webp" alt="QR Code" />
					<OutlinedButton className="mt-4 w-full" onClick={onClose}>
						閉じる
					</OutlinedButton>
				</CardContent>
			</Card>
		</div>
	);
};
