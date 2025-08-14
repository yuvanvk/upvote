import { Button } from "./button"
import { CreateButton } from "./create-button"

export const SiteHeader = () => {
    return <div className="flex justify-between my-5 items-center mx-2 mt-28">
       <div className="font-bold text-xl">Top upvotes</div>
       <div className="space-x-2 flex items-center">
        <Button variant={"outline"}>Issues</Button>
        <Button variant={"outline"}>Ideas</Button>
        <CreateButton />
       </div>
    </div>
}