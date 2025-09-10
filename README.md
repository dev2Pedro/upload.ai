# Upload.ai

Upload.ai é uma apli que permite carregar vídeos, transcrevê-los automaticamente utilizando **Whisper Large v3**, e em seguida aplicar prompts de IA para gerar resumos, títulos para YouTube, sugestões de livros relacionados, descrições e muito mais. A aplicação também possibilita configurar parâmetros como **temperatura** para ajustar a criatividade das respostas.

### 🚀 Tecnologias Utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,prisma" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</p>

#### 🤖 IA & Processamento de Linguagem
<p align="left">
  🟢 Groq API <br />
  🦙 LLaMA <br />
  🎤 Whisper Large v3
</p>


## 📥 Como clonar o projeto

```bash
# Clonar o repositório
git clone https://github.com/dev2Pedro/upload.ai.git

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

O projeto rodará normalmente em: [http://localhost:5173](http://localhost:5173)

---

## 🖼️ Funcionalidades em Detalhes

### 1. Tela Inicial

<img width="1694" height="981" alt="Image" src="https://github.com/user-attachments/assets/c706f488-f02c-4560-bd2b-74d0046b6123" />

Aqui você insere o **prompt personalizado** para a IA e faz o upload do vídeo.

---

### 2. Carregando um vídeo

<img width="1697" height="975" alt="Image" src="https://github.com/user-attachments/assets/8a2683f5-58d1-4c5d-9c3a-9d3308a6470a" />

Após selecionar um vídeo, você pode adicionar palavras-chave no campo **Prompt de transcrição** para guiar a geração.

---

### 3. Transcrição e Prompt em execução

<img width="1692" height="975" alt="Image" src="https://github.com/user-attachments/assets/856690a1-a7d8-46a7-ba14-0f6b024738ef" />

O vídeo é processado pelo **Whisper Large v3** para gerar a transcrição. Em seguida, a IA utiliza o prompt definido para gerar resultados.

---

### 4. Resultado gerado pela IA

<img width="1710" height="981" alt="Image" src="https://github.com/user-attachments/assets/4f23335d-9d47-4e4d-bf2c-0d82616e6640" />

Exemplo de resumo do vídeo + recomendações de livros. A saída depende diretamente do prompt utilizado.

---

### 5. Prompts disponíveis

<img width="1710" height="981" alt="Image" src="https://github.com/user-attachments/assets/41c55bb4-ad17-4160-ae08-63c5766549a2" />

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


