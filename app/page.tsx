
import { Main } from "@/components/main";
import { Navbar } from "@/components/ui/navbar";
import { SiteHeader } from "@/components/ui/site-header";

export default function Home({ searchParams }: { searchParams: { filter: string }}) {
  const filter = searchParams.filter ?? "all"

  return (
    <>
      <Navbar />
      <div
        className="max-w-7xl mx-auto flex flex-col h-screen relative border-x-1"
      >
        <SiteHeader filter={filter}/>
        <Main filter={filter}/>
      </div>
    </>
  );
}
