import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { CreatePost, CreatePostType } from "@/types/create_post_type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const user = await auth();
        if(!user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json();

        const { success } = CreatePost.safeParse(body);
        if(!success) {
            return NextResponse.json({ message: "Invalid inputs" }, { status: 400 })
        } 

        const { title, description, detailedDescription } = body as CreatePostType;

        const post = await prisma.post.create({
            data: {
                title,
                description,
                detailedDescription,
                userId: user.user?.id!
            }
        })

        return NextResponse.json({ message: "Created Post successfully", post })

    } catch (error) {
        console.log(`[CREATE_API]`, error)
    }
}