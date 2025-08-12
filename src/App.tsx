import { FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPrisma, SiShadcnui } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Wand2 } from "lucide-react";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";

export function App() {
  function handlePromptSelected(template: string) {
    console.log(template);
  }
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
          <VideoInputForm />

          <Separator />

          <div className="space-y-2">
            <Label>prompt</Label>
            <PromptSelect onPromptSelected={handlePromptSelected} />
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos, tendem a deixar o resultado mais criativo e
                com possiveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
