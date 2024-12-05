export enum Waluta {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski
}
  
export type Pensja = [number, Waluta];

export type Powod = (string | number)[];

export type Stanowisko = "szef" | "anetka" | "pani basia" | "podbutnik";

export type Pracownik = {
    id?: number;
    imie: string;
    nazwisko: string;
    stanowisko: Stanowisko;
    pseudonim: string;
    opis?: string;
    pensja: Pensja;
    zwolnij?: (...powody: Powod) => void;
};

export type PaniBasia = Pracownik & {
    graNaSkrzypcach: string;
    bezNiejTenZakładUpadnie: boolean;
};