import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
  return (
    <div className="fixed top-3 flex w-full max-w-7xl items-center justify-between border p-4 rounded-lg">
      <div>Logo</div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <button className="cursor-pointer rounded-lg bg-lime-500 px-6 py-2 font-medium text-black">
          Login
        </button>
      </div>
    </div>
  );
};
