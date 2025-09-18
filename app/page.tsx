import { Navbar } from "@/components/ui/navbar";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl ">
        <div className="pt-28">
          <div className="text-2xl font-semibold tracking-wide capitalize">Top ideas today</div>
        </div>
      </div>
    </div>
  );
}
