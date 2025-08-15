import { Main } from "@/components/main";

import { Navbar } from "@/components/ui/navbar";
import { SiteHeader } from "@/components/ui/site-header";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="max-w-7xl mx-auto flex flex-col h-screen relative border-x-2"
      >
        <SiteHeader />
        <Main />
      </div>
    </>
  );
}
