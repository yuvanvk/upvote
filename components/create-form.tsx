"use client";
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
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon, Loader2 } from "lucide-react";
import { AnimatePresence, motion as m } from "motion/react";
import axios from "axios";

export const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postType, setPostType] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCreate = async () => {
    try {
      if (!title || !description || !postType) {
        setError("Please provide all the details");
        return;
      }
      setLoading(true);
      const response = await axios.post("/api/create", {
        title,
        description,
        tag: postType,
      });

      if (response.status == 200) {
        setSuccess("Post created successfully!");
        setTimeout(() => router.push("/"), 2000);
      }
    } catch (error) {
      setError(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    }
  }, [success]);

  return (
    <div className="mt-28  space-y-10">
      <div className="border-b p-4">
        <div className="text-2xl font-semibold">Create a new post</div>
        <div className=" text-muted-foreground">
          Share your ideas, issue and more and get them upvoted
        </div>
      </div>
      <div className="space-y-8 border-b p-4">
        <div className="flex items-center gap-2">
          <Input
            onChange={(e) => setTitle(e.target.value)}
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
        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none min-h-[150px] !text-[16px] "
          placeholder="Description"
          required
          maxLength={200}
        />

        <div className="flex justify-between items-center">
          <Button onClick={() => router.push("/")} variant={"destructive"}>
            Cancel
          </Button>
          <Button className="min-w-20" onClick={handleCreate}>
            {loading ? <Loader2 className="animate-spin" /> : "Create"}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </m.div>
        )}

        {success && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <Alert variant="default">
              <AlertCircleIcon />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
