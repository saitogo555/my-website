"use client";

import { TypeAnimation } from "react-type-animation";

export function CommandOutputAnimation() {
	return (
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
	);
}
