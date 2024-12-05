import { Raport, RaportPracownika, RaportPracowników, RaportPieseczka } from "./types/raportTypes.js";

export const generujRaport = <T extends Raport | RaportPracownika | RaportPracowników | RaportPieseczka>(daneRaportu: T, efektywność: number, priorytet: "brak" | "na kiedyś" | "jak się upomną"): Promise<T> => {
    return new Promise((resolve) => {
        resolve({
            efektywność,
            priorytet,
            ...daneRaportu
        });
    });
}