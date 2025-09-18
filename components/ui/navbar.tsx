import { signIn } from "@/auth";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getUser } from "@/lib/user";
import { Avatar } from "./avatar";

export const Navbar = async () => {
  const user = await getUser();
  return (
    <div className="fixed w-full border-b-2 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl font-semibold text-white">
          <div>U</div>
        </div>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          {!user && (
            <button
              onClick={async () => {
                "use server";
                await signIn("google");
              }}
              className="flex cursor-pointer items-center gap-x-2 rounded-2xl bg-neutral-100 px-5 py-2 text-sm font-medium dark:bg-neutral-800"
            >
              Login
            </button>
          )}

          {user && <Avatar src={user.user?.image!} alt={user.user?.name!}/>}
        </div>
      </div>
    </div>
  );
};
