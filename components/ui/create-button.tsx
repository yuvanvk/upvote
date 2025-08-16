"use client";
import { Plus } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export const CreateButton = () => {
  const router = useRouter();
  const session = useSession();

  const handleCreate = () => {
    router.push("/create");
  };

  if (session.data?.user) {
    return (
      <Button
        onClick={handleCreate}
        className="w-10 h-10 rounded-full bg-[#99FE01] text-black flex items-center justify-center cursor-pointer"
      >
        <Plus />
      </Button>
    );
  }

  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-10 h-10 rounded-full bg-[#99FE01] flex items-center justify-center cursor-pointer">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please sign in first</DialogTitle>
          <DialogDescription>
            You need to sign in to create a new item.
          </DialogDescription>
        </DialogHeader>
       <Button onClick={() => signIn("google")}>Login with google</Button>
      </DialogContent>
    </Dialog>
  );
};
