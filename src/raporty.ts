import { Raport } from "./types/raportTypes.js";

export const generujRaport = <T extends Raport>(
  daneRaportu: Omit<T, "efektywność" | "priorytet">,
  efektywność: number,
  priorytet: string
): Promise<T> => {
  return new Promise((resolve) => {
    resolve({
      efektywność,
      priorytet,
      ...daneRaportu,
    } as T);
  });
};