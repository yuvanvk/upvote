import { signIn } from "@/auth";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

export const Navbar = () => {
  
  return (
    <div className="fixed w-full border-b-1 dark:bg-[#171717]">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
        <div className="font-semibold text-lg">Upvote</div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-5 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center gap-x-2 cursor-pointer text-sm font-medium">
            Login
          </button>
            </DialogTrigger>
            <DialogHeader>
              <DialogTitle>
                Welcome to Upvote!
              </DialogTitle>
              <DialogDescription>
                Please login to access to Upvote.
              </DialogDescription>
            </DialogHeader>
            <DialogContent>
              <button>
                Login
              </button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
