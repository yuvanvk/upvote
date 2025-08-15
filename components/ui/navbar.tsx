
import { ChevronsUpDown } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";
import { User } from "./user";
import { auth } from "@/auth";


export const Navbar = async () => {
  const session = await auth()
  return (
    <div className="fixed w-full top-0 border-b-2 z-20">
      <div className="flex max-w-7xl mx-auto items-center justify-between p-4">
      <ChevronsUpDown />
        <div className="flex items-center space-x-3">
          <ThemeToggleButton variant="polygon" />
          <User session={session}/>
        </div>
      </div>
    </div>
  );
};
