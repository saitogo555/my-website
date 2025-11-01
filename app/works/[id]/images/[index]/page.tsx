import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageViewer } from "@/features/works/components/ImageViewer";
import { WORK_LIST } from "@/features/works/constants";

type Props = {
	params: Promise<{
		id: string;
		index: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, index } = await params;
	const data = WORK_LIST.find((item) => item.id === id);
	const image = data?.images[Number.parseInt(index, 10) - 1];

	return {
		title: image ? `${image.title} [${data.title}]` : "Not Found",
	};
}

export async function generateStaticParams() {
	return WORK_LIST.flatMap((item) =>
		item.images.map((_, i) => ({
			id: item.id,
			index: (i + 1).toString(),
		})),
	);
}

export default async function ImageIndexPage({ params }: Props) {
	const { id, index } = await params;
	const data = WORK_LIST.find((item) => item.id === id);
	const image = data?.images[Number.parseInt(index, 10) - 1];

	if (!image) return notFound();

	return <ImageViewer image={image} />;
}
