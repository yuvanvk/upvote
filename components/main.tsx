import prisma from "@/db/src";
import { PostCard } from "./ui/post-card"

export interface PostType {
    id: string;
    title: string;
    description: string;
    upvotes: number;
    downvotes: number;
    tags: string;
}

export const Main = async () => {

      const posts = await prisma.post.findMany();

      
    return <div className="w-full">
        {posts.map((i, idx) => (
             <PostCard key={idx} title={i.title} description={i.description} upvotes={i.upvotes} downvotes={i.downvotes} tags={i.tag} id={i.id}/>
        ))}
    </div>
}