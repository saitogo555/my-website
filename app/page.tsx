"use client";

import { FilledButton, OutlinedButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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
						<TypeAnimation
							className="text-neutral-300"
							sequence={[500, "whoami"]}
							speed={{ type: "keyStrokeDelayInMs", value: 40 }}
							cursor={false}
							wrapper="p"
						/>
					</div>
					<TypeAnimation
						className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text font-bold text-3xl text-transparent after:text-neutral-300"
						sequence={[
							2000,
							"I'm Front-end Engi",
							500,
							"I'm Back-end Engi",
							500,
							"I'm Full Stack Web Developer",
						]}
						speed={20}
						deletionSpeed={{ type: "keyStrokeDelayInMs", value: 40 }}
						cursor={true}
						wrapper="p"
					/>
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
