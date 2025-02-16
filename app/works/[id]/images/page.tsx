import { redirect } from "next/navigation";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

const ImagesPage = async ({ params }: Props) => {
	const { id } = await params;
	redirect(`/works/${id}/images/1`);
};

export default ImagesPage;
