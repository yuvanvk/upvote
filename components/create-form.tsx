"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export const CreateForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postType, setPostType] = useState("");
    const [error, setError] = useState<string | null>(null)

    const router = useRouter();

    const handleCreate = async () => {
        if(!title || !description || !postType) {
            setError("Please provide all the details")
            return
        }
    }
    

  return (
    <div className="mt-28 mx-2 space-y-10">
      <div>
        <div className="text-2xl font-semibold">Create a new post</div>
        <div className=" text-muted-foreground">
          Share your ideas, issue and more and get them upvoted
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Input onChange={(e) => setTitle(e.target.value)}
            className="py-6 !text-[16px]"
            type="text"
            placeholder="Title*"
            required
            maxLength={50}
          />
          <Select onValueChange={(value) => setPostType(value)}>
            <SelectTrigger className="py-6 min-w-40">
              <SelectValue placeholder="Select post type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="issue">Issue</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Textarea onChange={(e) => setDescription(e.target.value)}
          className="resize-none min-h-[150px] !text-[16px]"
          placeholder="Description"
          required
          maxLength={200}
        />

        <div className="flex justify-between items-center">
          <Button onClick={() => router.push("/")} variant={"destructive"}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </div>
    </div>
  );
};
