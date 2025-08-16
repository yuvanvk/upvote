import Link from "next/link"
import { Button } from "./button"
import { CreateButton } from "./create-button"

export const SiteHeader = ({ filter }: { filter: string }) => {
    return <div className="flex justify-between  items-center mt-[66px] border-b-1 p-8">
       <div className="font-semibold text-3xl">Top upvotes</div>
       <div className="space-x-2 flex items-center">
       <Link href="/?filter=issue">
          <Button variant={filter === "issue" ? "default" : "outline"}>Issues</Button>
        </Link>
        <Link href="/?filter=idea">
          <Button variant={filter === "idea" ? "default" : "outline"}>Ideas</Button>
        </Link>
        <CreateButton />
       </div>
    </div>
}