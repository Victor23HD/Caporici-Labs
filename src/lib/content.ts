import { getCollection, type CollectionEntry } from "astro:content";
import { trilhas, type Trilha } from "../data/trilhas";

export type Artigo = CollectionEntry<"automotivo">;

export function isProducao(): boolean {
  return import.meta.env.PROD;
}

export function isPublico(artigo: Artigo): boolean {
  if (!isProducao()) {
    return true;
  }

  return artigo.data.status === "publicado";
}

export async function listarArtigos(): Promise<Artigo[]> {
  const artigos = await getCollection("automotivo", isPublico);

  return artigos.sort((a, b) => {
    if (a.data.trilha === b.data.trilha) {
      return a.data.ordem - b.data.ordem;
    }

    const trilhaA = trilhas.find((item) => item.id === a.data.trilha)?.numero ?? 99;
    const trilhaB = trilhas.find((item) => item.id === b.data.trilha)?.numero ?? 99;
    return trilhaA - trilhaB;
  });
}

export async function artigoPorSlug(slug: string): Promise<Artigo | undefined> {
  const artigos = await listarArtigos();
  return artigos.find((artigo) => artigo.id === slug || artigo.id === `${slug}/index`);
}

export function slugDoArtigo(artigo: Artigo): string {
  return artigo.id.replace(/\/index$/, "");
}

export function navegacaoArtigo(artigos: Artigo[], atual: Artigo) {
  const indice = artigos.findIndex((item) => item.id === atual.id);

  return {
    anterior: indice > 0 ? artigos[indice - 1] : undefined,
    proximo: indice >= 0 && indice < artigos.length - 1 ? artigos[indice + 1] : undefined,
  };
}

export function artigosDaTrilha(artigos: Artigo[], trilhaId: string): Artigo[] {
  return artigos.filter((artigo) => artigo.data.trilha === trilhaId);
}

export function trilhasComContagem(artigos: Artigo[]): Array<Trilha & { publicados: number }> {
  return trilhas.map((trilha) => ({
    ...trilha,
    publicados: artigosDaTrilha(artigos, trilha.id).filter(
      (artigo) => artigo.data.status === "publicado",
    ).length,
  }));
}

export function rotuloStatus(status: Artigo["data"]["status"]): string {
  switch (status) {
    case "publicado":
      return "Publicado";
    case "revisao":
      return "Em revisão";
    case "rascunho":
      return "Rascunho";
  }
}

export function rotuloNivel(nivel: Artigo["data"]["nivel"]): string {
  switch (nivel) {
    case "introdutorio":
      return "Introdutório";
    case "intermediario":
      return "Intermediário";
    case "avancado":
      return "Avançado";
  }
}
