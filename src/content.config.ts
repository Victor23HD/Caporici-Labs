import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const fonteSchema = z.object({
  titulo: z.string(),
  url: z.string().url().optional(),
  tipo: z.enum(["norma", "documentacao", "pratica", "secundaria"]),
  nota: z.string().optional(),
});

const laboratorioSchema = z.object({
  titulo: z.string(),
  objetivo: z.string(),
  dificuldade: z.enum(["basico", "intermediario", "avancado"]),
  entradas: z.string(),
  saida: z.string(),
  riscos: z.string(),
});

const automotivo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/automotivo" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string().min(40),
    trilha: z.string(),
    ordem: z.number().int().positive(),
    nivel: z.enum(["introdutorio", "intermediario", "avancado"]),
    preRequisitos: z.array(z.string()).default([]),
    status: z.enum(["rascunho", "revisao", "publicado"]),
    objetivos: z.array(z.string()).min(1),
    normas: z.array(z.string()).default([]),
    fontes: z.array(fonteSchema).min(1),
    limitacoes: z.array(z.string()).min(1),
    laboratorio: laboratorioSchema.optional(),
    revisao: z.string(),
    atualizadoEm: z.coerce.date(),
  }),
});

export const collections = { automotivo };
