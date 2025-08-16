import { Main } from "@/components/main";
import { SiteHeader } from "@/components/ui/site-header";

export default async function Home(
  props: {
    searchParams: Promise<{ filter: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const filter = searchParams.filter ?? "all";

  return (
    <>
      <SiteHeader filter={filter} />
      <Main filter={filter} />
    </>
  );
}
