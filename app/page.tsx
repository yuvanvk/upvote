

export default async function Home(
  props: {
    searchParams: Promise<{ filter: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const filter = searchParams.filter ?? "all";

  return (
    <>
    
    </>
  );
}
