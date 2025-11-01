"use client";

import { TypeAnimation } from "react-type-animation";

export function CommandInputAnimation() {
	return (
		<TypeAnimation
			className="text-neutral-300"
			sequence={[500, "whoami"]}
			speed={{ type: "keyStrokeDelayInMs", value: 40 }}
			cursor={false}
			wrapper="p"
		/>
	);
}
