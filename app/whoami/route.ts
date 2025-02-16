import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		name: "saitogo555",
		age: 20,
		birthday: "2001/05/16",
		bloodType: "A(+)",
		location: "Aichi, Nagoya",
		job: "Automobile parts prototype assembly",
		hobby: ["Programming", "Game", "Travel", "Drive", "Cosplay"],
		catchphrase: "In the future, all apps will be replaced by web apps",
	});
}
