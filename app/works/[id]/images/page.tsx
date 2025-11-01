import { redirect } from "next/navigation";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ImagesPage({ params }: Props) {
	const { id } = await params;
	redirect(`/works/${id}/images/1`);
}
