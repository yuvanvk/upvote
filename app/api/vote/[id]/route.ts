import { auth } from "@/auth";
import prisma from "@/db/src";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json(
                { message: "Unauthorized, Please Login." },
                { status: 400 }
            );
        }

        const { type } = await req.json();
        if (!["up", "down"].includes(type)) {
            return NextResponse.json({ message: "Invalid type" }, { status: 400 });
        }

        const postId = params.id;
        const userId = session.user.id;

        let result;

        const existingVote = await prisma.vote.findUnique({
            where: {
                userId_postId: {
                    userId: session.user.id,
                    postId: params.id,
                },
            },
        });

        await prisma.$transaction(async (tx) => {
            if (!existingVote) {
                result = await tx.post.update({
                    where: { id: postId },
                    data: {
                        upvotes: type === "up" ? { increment: 1 } : undefined,
                        downvotes: type === "down" ? { increment: 1 } : undefined,
                    },
                });

                await tx.vote.create({
                    data: {
                        userId,
                        postId,
                        voteType: type === "up" ? "UPVOTE" : "DOWNVOTE",
                    },
                });

            } else if (existingVote.voteType === "UPVOTE" && type === "down") {
                result = await tx.post.update({
                    where: { id: postId },
                    data: { downvotes: { increment: 1 }, upvotes: { decrement: 1 } },
                });
                await tx.vote.update({
                    where: { userId_postId: { userId, postId } },
                    data: { voteType: "DOWNVOTE" },
                });

            } else if (existingVote.voteType === "DOWNVOTE" && type === "up") {
                result = await tx.post.update({
                    where: { id: postId },
                    data: { upvotes: { increment: 1 }, downvotes: { decrement: 1 } },
                });
                await tx.vote.update({
                    where: { userId_postId: { userId, postId } },
                    data: { voteType: "UPVOTE" },
                });

            } else if (existingVote.voteType === "DOWNVOTE" && type === "down") {
                result = await tx.post.update({
                    where: { id: postId },
                    data: { downvotes: { decrement: 1 } },
                });

                await tx.vote.delete({
                    where: {
                        userId_postId: {
                            userId,
                            postId,
                        },
                    },
                });

              
            } else if (existingVote.voteType === "UPVOTE" && type === "up") {
                result = await tx.post.update({
                    where: { id: postId },
                    data: { upvotes: { decrement: 1 } },
                });

                await tx.vote.delete({ where: { userId_postId: { userId, postId } } });
              
            }
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
