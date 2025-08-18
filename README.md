# Upload.ai

Upload.ai é uma aplicação que permite carregar vídeos, transcrevê-los automaticamente utilizando **Whisper Large v3**, e em seguida aplicar prompts de IA para gerar resumos, títulos para YouTube, sugestões de livros relacionados, descrições e muito mais. A aplicação também possibilita configurar parâmetros como **temperatura** para ajustar a criatividade das respostas.

---

## 🚀 Tecnologias Utilizadas

* **Next.js** – Framework React para front-end.
* **TailwindCSS** – Estilização.
* **Groq API** – Para processamento de linguagem natural.
* **LLaMA** – Modelo de linguagem utilizado para geração de texto.
* **Whisper Large v3** – Modelo de transcrição de áudio/vídeo.

---

## 📥 Como clonar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/upload.ai.git

# Entrar na pasta do projeto
cd upload.ai

# Instalar dependências
npm install
```

---

## ▶️ Como rodar o projeto

```bash
# Iniciar em modo desenvolvimento
npm run dev
```

O projeto rodará normalmente em: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Funcionalidades em Detalhes

### 1. Tela Inicial

<img width="1694" height="981" alt="Image" src="https://github.com/user-attachments/assets/c706f488-f02c-4560-bd2b-74d0046b6123" />
Aqui você insere o **prompt personalizado** para a IA e faz o upload do vídeo.

---

### 2. Carregando um vídeo

!\[Upload vídeo]\(/mnt/data/Captura de Tela 2025-08-18 às 12.44.22.png)
Após selecionar um vídeo, você pode adicionar palavras-chave no campo **Prompt de transcrição** para guiar a geração.

---

### 3. Transcrição e Prompt em execução

!\[Transcrição e Prompt]\(/mnt/data/Captura de Tela 2025-08-18 às 12.45.59.png)
O vídeo é processado pelo **Whisper Large v3** para gerar a transcrição. Em seguida, a IA utiliza o prompt definido para gerar resultados.

---

### 4. Resultado gerado pela IA

!\[Resultado IA]\(/mnt/data/Captura de Tela 2025-08-18 às 12.46.41.png)
Exemplo de resumo do vídeo + recomendações de livros. A saída depende diretamente do prompt utilizado.

---

### 5. Prompts disponíveis

!\[Prompts disponíveis]\(/mnt/data/Captura de Tela 2025-08-18 às 12.47.20.png)
A aplicação conta com prompts prontos como:

* **Título YouTube**
* **Descrição YouTube**

Além disso, é possível escrever prompts personalizados.

---

## ⚙️ Ajustando a Temperatura

A **temperatura** define a criatividade da resposta:

* Valores **baixos** → respostas mais precisas e objetivas.
* Valores **altos** → respostas mais criativas, mas com maior chance de erros.

---

## 📌 Observação

Você pode utilizar a variável **{transcription}** no prompt para inserir automaticamente o conteúdo transcrito do vídeo selecionado.

---

## 📚 Exemplo de Uso

* Subir um vídeo.
* Selecionar o prompt **Resumo + Sugestão de Livros**.
* A IA gera automaticamente um resumo do vídeo e recomenda 3 livros relacionados.

---

