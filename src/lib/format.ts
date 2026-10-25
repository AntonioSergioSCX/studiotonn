/** Separa "texto *destaque* texto" em partes; as ímpares são o destaque. */
export const splitAccent = (text: string) => text.split('*');
