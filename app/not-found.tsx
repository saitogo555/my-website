import { FilledButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/ui/PageTitle";
import type { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
	return {
		title: "404 Not Found",
	};
};

const NotFoundPage = () => {
	return (
		<Container className="flex items-center justify-center">
			<div className="flex flex-col items-center">
				<PageTitle text="404 Not Found" />
				<Link href="/">
					<FilledButton>トップページに戻る</FilledButton>
				</Link>
			</div>
		</Container>
	);
};

export default NotFoundPage;
