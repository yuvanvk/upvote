import { PostCard } from "./ui/post-card"

export interface PostType {
    id: number
    title: string;
    description: string;
    upvotes: number;
    downvotes: number;
    tags: string[]
}

export const Main = () => {

    const sampleIdeas: PostType[] = [
        {
          id: 1,
          title: "AI-Powered Community Garden Network",
          description: "A platform that connects neighbors to share garden space, tools, and knowledge while using AI to optimize planting schedules and crop rotation for maximum yield.",
          upvotes: 24,
          downvotes: 3,
          tags: ["idea"]  
        },
        {
          id: 2,
          title: "Virtual Reality Collaboration Workspace",
          description: "Create immersive VR meeting spaces where remote teams can collaborate on 3D projects, brainstorm with virtual whiteboards, and build stronger connections through shared experiences.",
         
          upvotes: 18,
          downvotes: 1,
          tags: ["idea"] 
        },
        {
          id: 3,
          title: "Skill-Swap Marketplace for Local Communities",
          description: "A hyperlocal platform where neighbors can exchange skills and services - teach guitar for home repairs, cooking lessons for tutoring, creating a barter economy that strengthens community bonds.",
        
          upvotes: 31,
          downvotes: 2,
          tags: ["idea"] 
        }
      ];
    return <div className="w-full">
        {sampleIdeas.map((i, idx) => (
             <PostCard key={idx} title={i.title} description={i.description} upvotes={i.upvotes} downvotes={i.downvotes} tags={i.tags} id={i.id}/>
        ))}
    </div>
}