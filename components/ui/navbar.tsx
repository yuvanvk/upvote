"use client";
import { ChevronsUpDown } from "lucide-react";
import ThemeToggleButton from "./theme-toggle-button";


export const Navbar = () => {
  return (
    <div className="fixed max-w-7xl w-full mx-auto top-3">
      <div className="flex items-center justify-between p-4 border rounded-xl">
        <div className="flex items-center text-3xl  gap-1 font-bold">
          <ChevronsUpDown />
          Upvote
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggleButton variant="polygon" />
        </div>
      </div>
    </div>
  );
};
