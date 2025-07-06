import { NextRequest, NextResponse } from "next/server";
let MY_IDEAS: any[] = []
export async function GET(req: NextRequest) {
  return NextResponse.json({ data: 'hi' })
}
export async function POST(req: NextRequest) {
  return NextResponse.json({ data: MY_IDEAS }, { status: 200 })
}