import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiShadcnui } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com
          </span>

          <div className="flex items-center gap-2 text-muted-foreground">
            <FaReact className="w-5 h-5 text-cyan-400" title="React" />
            <SiTailwindcss
              className="w-5 h-5 text-sky-500"
              title="Tailwind CSS"
            />
            <SiPrisma className="w-5 h-5 text-indigo-500" title="Prisma" />
            <SiShadcnui className="w-5 h-5 text-white" title="shadcn/ui" />
          </div>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <FaGithub className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
