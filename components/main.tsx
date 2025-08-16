import prisma from "@/db/src";
import { PostCard } from "./ui/post-card"
import { Tag } from "@/db/src/generated/prisma";

export interface PostType {
    id: string;
    title: string;
    description: string;
    upvotes: number;
    downvotes: number;
    tags: string;
}

export const Main = async ({ filter }: { filter: string }) => {

    let where = {};
    if (filter !== "all") {
      where = { tag: filter === "idea" ? Tag.Idea : Tag.Issue };
    }
  
    const posts = await prisma.post.findMany({ where });

      
    return <div className="w-full">
        {posts.map((i, idx) => (
             <PostCard key={idx} title={i.title} description={i.description} upvotes={i.upvotes} downvotes={i.downvotes} tags={i.tag} id={i.id}/>
        ))}
    </div>
}