"use client";

import { CreatePostType } from "@/types/create_post_type";
import { useState } from "react";

export const CreateForm = () => {
  const [data, setData] = useState<CreatePostType>({
    title: "",
    description: "",
    detailedDescription: "",
  });

  const handleSubmit = () => {

  }

  return (
    <div className="w-full pt-20 max-w-7xl mx-auto">
       <div className="space-y-1">
            <div className="text-4xl font-semibold">Create a new post</div>
            <div className="text-muted-foreground">Share your idea, and get it upvoted.</div>
       </div>

       <form onSubmit={handleSubmit}>
            <div>
                
            </div>
       </form>
    </div>
  );
};
