import { NextResponse } from "next/server";
import { PROFILE } from "@/features/about/constants/profile";

export async function GET() {
	return NextResponse.json({ ...PROFILE });
}
