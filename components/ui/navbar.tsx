
import { ChevronsUpDown } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";
import { User } from "./user";
import { auth } from "@/auth";


export const Navbar = async () => {
  const session = await auth()
  return (
    <div className="fixed max-w-7xl w-full mx-auto top-3">
      <div className="flex items-center justify-between p-4 border rounded-xl">
      <ChevronsUpDown />
        <div className="flex items-center space-x-3">
          <ThemeToggleButton variant="polygon" />
          <User session={session}/>
        </div>
      </div>
    </div>
  );
};
