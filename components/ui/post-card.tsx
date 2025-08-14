"use client"
import { useState } from "react";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { VoteButton } from "./vote-button";
import { PostType } from "../main";

export const PostCard = ({ title, description, upvotes, downvotes, tags }: PostType) => {

  const [localUpvotes, setLocalUpVotes] = useState(upvotes)
  const [localDownvotes, setLocalDownVotes] = useState(downvotes)

  const handleUpVoteChange = () => {
    setLocalUpVotes(c => c + 1)
  }

  const handleDownVoteChange = () => {
    setLocalDownVotes(c => c + 1)
  }
  return (
    <Card className="my-2 mx-2">
      <CardContent className="relative flex flex-col space-y-2">
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col space-y-1">
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-muted-foreground">
              {description}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <VoteButton onClick={handleUpVoteChange} type="up"  count={localUpvotes} />
            <VoteButton onClick={handleDownVoteChange} type="down" count={localDownvotes} />
          </div>
        </div>
        {tags.map((t, idx) => <Badge key={idx} variant={"secondary"}>
          {t}
        </Badge>)}
      </CardContent>
    </Card>
  );
};
