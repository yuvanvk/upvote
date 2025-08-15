import { auth } from "@/auth";
import prisma from "@/db/src";
import { Tag } from "@/db/src/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await auth();
    if(!session?.user) {
        return NextResponse.json({ message: "Unauthorized please signin"}, { status: 400 })
    }
    try {
        const body = await req.json();
        const { title, description, tag } = body;

        if(!title?.trim() || !description?.trim() || !tag) {
            return NextResponse.json({ message: "Please Provide valid details"}, { status: 401 })
        }

        await prisma.post.create({
            data: {
                title: title.trim(),
                description: description.trim(),
                tag: tag === "idea" ? Tag.Idea : Tag.Issue ,
                userId: session?.user?.id!
            }
        })

        return NextResponse.json({ message: "Created a post successfully"}, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error"}, { status: 500 })
    }
}