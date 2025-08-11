import { FFmpeg } from "@ffmpeg/ffmpeg";

let ffmpeg: FFmpeg | null = null;

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg();

  if (!ffmpeg.loaded) {
    // Esta parte é a correção.
    // Ela constrói as URLs dinamicamente em vez de tentar importar os arquivos.
    const baseURL = new URL("/ffmpeg/", window.location.origin).toString();

    await ffmpeg.load({
      coreURL: `${baseURL}ffmpeg-core.js`,
      wasmURL: `${baseURL}ffmpeg-core.wasm`,
      workerURL: `${baseURL}ffmpeg-core.worker.js`,
    });
  }

  return ffmpeg;
}
