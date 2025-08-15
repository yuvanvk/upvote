
import { Main } from "@/components/main";

import { Navbar } from "@/components/ui/navbar";
import { SiteHeader } from "@/components/ui/site-header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col relative h-screen" >
        <Navbar />
        <SiteHeader />
        <Main />
    </div>
  );
}
