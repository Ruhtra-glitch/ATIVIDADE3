export default function formatarNome(nomeCompleto: string): string {
  const partes = nomeCompleto.toLowerCase().split(" ");
  return partes
    .map((parte, index) =>
      index === 0 ? parte.toUpperCase() : parte.charAt(0).toUpperCase() + parte.slice(1)
    )
    .join(" ");
}

export function contarVogais(texto: string): number {
  let contador = 0;
  for (const char of texto.toLowerCase()) {
    if ("aeiou".includes(char)) contador++;
  }
  return contador;
}
