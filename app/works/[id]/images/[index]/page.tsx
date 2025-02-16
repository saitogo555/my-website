import { ImageViewer } from "@/features/works/components/ImageViewer";
import { workList } from "@/features/works/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{
		id: string;
		index: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id, index } = await params;
	const data = workList.find((item) => item.id === id);
	const image = data?.images[Number.parseInt(index) - 1];

	return {
		title: image ? `${image.title} [${data.title}]` : "Not Found",
	};
}

export async function generateStaticParams() {
	return workList.flatMap((item) =>
		item.images.map((_, i) => ({
			id: item.id,
			index: (i + 1).toString(),
		})),
	);
}

const ImageIndexPage = async ({ params }: Props) => {
	const { id, index } = await params;
	const data = workList.find((item) => item.id === id);
	const image = data?.images[Number.parseInt(index) - 1];

	if (!image) return notFound();

	return <ImageViewer image={image} />;
};

export default ImageIndexPage;
