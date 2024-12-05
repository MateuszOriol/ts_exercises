export enum Waluta {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski
}
  
export type Pensja = [number, Waluta];

export type Pracownik = {
    id: number;
    imie: string;
    nazwisko: string;
    stanowisko: "szef" | "anetka" | "pani basia" | "podbutnik";
    pseudonim: string;
    opis?: string;
    pensja: Pensja;
    zwolnij?: (...powody: (string | number)[]) => void;
};

export type PaniBasia = Pracownik & {
    graNaSkrzypcach: string;
    bezNiejTenZakładUpadnie: boolean;
};