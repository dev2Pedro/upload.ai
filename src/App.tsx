import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiShadcnui } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { FileVideo, Upload } from "lucide-react";
import { Label } from "./components/ui/label";

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
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Inclua o promt para a IA..."
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Selecione um video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-1">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="min-h-20 leading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no video, separadas por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
