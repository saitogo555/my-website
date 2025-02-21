import { PROFILE } from "@/features/about/constants/profile";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ ...PROFILE });
}
