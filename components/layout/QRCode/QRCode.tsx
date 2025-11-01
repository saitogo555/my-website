import type { KeyboardEvent, MouseEvent } from "react";
import { OutlinedButton } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";

type Props = {
	onClose: () => void;
};

export function QRCode({ onClose }: Props) {
	const handleClickOverlay = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleKeydown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	return (
		<button
			type="button"
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
			onClick={handleClickOverlay}
			onKeyDown={handleKeydown}
			aria-label="QRコードダイアログを閉じる"
		>
			<Card className="mx-4">
				<CardContent className="w-fit">
					<Image
						className="w-full overflow-hidden rounded-lg"
						src="/images/qr-code.webp"
						alt="QR Code"
						skeltonSize={{
							width: "100%",
							aspectRatio: "1/1",
						}}
					/>
					<OutlinedButton className="mt-4 w-full" onClick={onClose}>
						閉じる
					</OutlinedButton>
				</CardContent>
			</Card>
		</button>
	);
}
