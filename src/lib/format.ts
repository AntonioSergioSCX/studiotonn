/** Separa "texto *destaque* texto" em partes; as ímpares são o destaque. */
export const splitAccent = (text: string) => text.split('*');

/**
 * Quebra o texto em palavras para animar uma a uma, mantendo o destaque (*...*).
 * Cada palavra tem pedaços: "*vender*," vira uma palavra com "vender" (destaque) + ",".
 */
export const splitWords = (text: string) => {
  const words: { text: string; accent: boolean }[][] = [];
  let open = true; // a próxima palavra começa nova (houve espaço antes)
  splitAccent(text).forEach((part, i) => {
    const accent = i % 2 === 1;
    part.split(/(\s+)/).forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) { open = true; return; }
      if (open || !words.length) words.push([]);
      words[words.length - 1].push({ text: token, accent });
      open = false;
    });
  });
  return words;
};
