import { Button } from "./button"
import { CreateButton } from "./create-button"

export const SiteHeader = () => {
    return <div className="flex justify-between  items-center mt-[66px] border-b-2 p-8">
       <div className="font-semibold text-3xl">Top upvotes</div>
       <div className="space-x-2 flex items-center">
        <Button variant={"outline"}>Issues</Button>
        <Button variant={"outline"}>Ideas</Button>
        <CreateButton />
       </div>
    </div>
}