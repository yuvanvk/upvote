import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navbar = () => {
  return (
    <div className="fixed w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
        <div className="font-semibold text-lg">Upvote</div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <button className="px-5 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center gap-x-2 cursor-pointer text-sm font-medium">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
