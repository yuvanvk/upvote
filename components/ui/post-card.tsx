"use client"
import { useState } from "react";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { VoteButton } from "./vote-button";
import { PostType } from "../main";
import axios from "axios";

export const PostCard = ({ title, description, upvotes, downvotes, tags, id }: PostType) => {

  const [localUpvotes, setLocalUpVotes] = useState(upvotes)
  const [localDownvotes, setLocalDownVotes] = useState(downvotes)
  const [isActive, setIsActive] = useState<number | null>(null);

 

  const handleVoteChange = async (type: string) => {
    if(type === "up") {
      setIsActive(0)
    } else {
      setIsActive(1)
    }

    const response = await axios.post(`/api/vote/${id}`, {
      type
    })

    const data = await response.data
    setLocalDownVotes(data.downvotes)
    setLocalUpVotes(data.upvotes)
  }
  
  return (
    <Card className="my-3 mx-2  shadow-none border">
      <CardContent>
        <div className="flex flex-col space-y-2">
         
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
            
           
            <div className="flex  items-center space-x-5 flex-shrink-0">
              <VoteButton isActive={isActive == 0} onClick={() => handleVoteChange("up")}  type="up" count={localUpvotes} />
              <VoteButton isActive={isActive == 1} onClick={() => handleVoteChange("down")} type="down" count={localDownvotes} />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {tags}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
