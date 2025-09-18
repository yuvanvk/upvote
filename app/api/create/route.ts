import { CreatePost } from "@/types/create_post_type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { success } = CreatePost.safeParse(body);
        if(!success) {
            return NextResponse.json({ message: "Invalid inputs" }, { status: 400 })
        } 

        const { title, description, detailedDescription } = body;

        

    } catch (error) {
        console.log(`[CREATE_API]`, error)
    }
}