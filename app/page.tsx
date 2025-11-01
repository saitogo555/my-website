import Link from "next/link";
import { FilledButton, OutlinedButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CommandInputAnimation } from "@/features/index/components/CommandInputAnimation";
import { CommandOutputAnimation } from "@/features/index/components/CommandOutputAnimation";

export default function IndexPage() {
	return (
		<Container className="flex items-center">
			<div>
				<h1 className="font-bold text-6xl text-primary-text">SAITO GO</h1>
				<div className="mt-4 h-32">
					<div className="flex items-center text-2xl">
						<span className="text-green-700">visitor@saitogo.me</span>
						<span className="text-neutral-300">:</span>
						<span className="text-blue-700">~</span>
						<span className="text-neutral-300">$</span>
						<div className="mx-2" />
						<CommandInputAnimation />
					</div>
					<CommandOutputAnimation />
				</div>
				<div className="flex gap-4">
					<Link href="/about">
						<FilledButton className="w-40">View Details</FilledButton>
					</Link>
					<Link href="/contact">
						<OutlinedButton className="w-40">Contact Me</OutlinedButton>
					</Link>
				</div>
			</div>
		</Container>
	);
}
