export type Raport = {
    efektywność: number;
    priorytet: "brak" | "na kiedyś" | "jak się upomną";
};

export type RaportPracownika = Raport & {
    obniżonaEfektywność: boolean;
    spadekPensji: number;
};

export type RaportPracowników = {
    [id: number]: RaportPracownika;
};

export type RaportPieseczka = Raport & {
    szczekanie: true;
    isPies: true;
    aKtoToJestTakimSłodkimPieseczkiem: true;
};