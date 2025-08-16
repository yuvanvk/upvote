import { Main } from "@/components/main";
import { SiteHeader } from "@/components/ui/site-header";

export default function Home({
  searchParams,
}: {
  searchParams: { filter: string };
}) {
  const filter = searchParams.filter ?? "all";

  return (
    <>
      <SiteHeader filter={filter} />
      <Main filter={filter} />
    </>
  );
}
