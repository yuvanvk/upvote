import { CreateForm } from "@/components/create-form";
import { Navbar } from "@/components/ui/navbar";

export default function CreatePage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col relative h-screen">
      <Navbar />
      <CreateForm />
    </div>
  );
}
