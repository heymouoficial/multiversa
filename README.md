# Multiversa Agency - Ecosystem of Digital Employees

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

> [!IMPORTANT]
> **COPYRIGHT 2025 - PROPIEDAD INTELECTUAL**
> Este software, diseño y arquitectura ("SmartWeb") son propiedad exclusiva de **RunaGold y HeyMou**.
> Registro de Propiedad Intelectual: **SafeCreative 2025**.
> Todos los derechos reservados.

## ¿Qué es Multiversa?
Multiversa es una **SmartWeb** y un Sistema Operativo de Agencia (Agency OS) diseñado para la orquestación de empleados digitales. No es solo una página web, es un entorno inmersivo y reactivo.

### 🧠 Núcleo de Inteligencia: Gemini API LIVE
El corazón de Multiversa es **Gemini API LIVE**. Utilizamos la última tecnología multimodal de Google para permitir una interacción fluida y natural:
- **Voz Bidireccional:** Habla con la agencia y recibe respuestas en tiempo real.
- **Contexto Infinito:** Integración con bases de datos vectoriales (Pinecone) para recordar cada interacción.
- **Multimodalidad:** Procesamiento nativo de texto, audio y visión.

## Arquitectura SmartWeb
- **Frontend:** React 19 + Vite (Ultra-Fast)
- **Estilo:** Tailwind CSS 4 + OGL (Efectos Visuales Reactivos)
- **Backend:** Supabase (PostgreSQL + RLS)
- **Memoria:** Pinecone (Vector Database)

## Run Locally

**Prerequisites:**  Node.js (v20+)

1. Install dependencies:
   `pnpm install`

2. Configure Environment:
   Create a `.env` file with your keys:
   ```env
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=...
   VITE_GEMINI_API_KEY=...
   VITE_PINECONE_API_KEY=...
   ```

3. Run the app:
   `pnpm dev`
