import pracownicy from '../dane/pracownicy.json' assert { type: "json" };
import { listaPracowników } from "./index.js";
import { Pies, Pracownik, Stanowisko, Waluta} from "./types/pracownikTypes.js";



export const dodajPracownikówZListy = () => {
    pracownicy.forEach((pracownik) => {
        if ("id" in pracownik && typeof pracownik.stanowisko === "string") {
        const nowyPracownik: Pracownik = {
            id: pracownik.id,
            imie: pracownik.imie,
            nazwisko: pracownik.nazwisko ?? "Nieznane",
            stanowisko: (pracownik.stanowisko as Stanowisko),
            pseudonim: pracownik.pseudonim ?? "Brak",
            opis: pracownik.opis ?? "",
            pensja: (pracownik.pensja as [number, Waluta]) ?? [0, Waluta.Złoty_Polski_Peelen],
            zwolnij: zwolnijGo
        };
        dodajPracownika(nowyPracownik);
    } else if("isPies" in pracownik && pracownik.isPies) {
        const nowyPies: Pies = {
            id: listaPracowników.length + 1,
            imie: pracownik.imie,
            nazwisko: "Pies",
            stanowisko: "podbutnik",
            pensja: [0, Waluta.Złoty_Polski_Peelen],
            pseudonim: "Piesek",
            rasa: pracownik.rasa,
            wiek: pracownik.wiek,
            nienawidzi: pracownik.nienawidzi
          };
          listaPracowników.push(nowyPies);
    } else {
        console.log("Nie udało się dodać pracownika: ", pracownik);
    }
    });
};

export const dodajNowegoPracownika = (imie: string, nazwisko: string, stanowisko: Stanowisko, pensja: [number, number], zwolnij?: (...powody: (string | number)[]) => void) => {
    listaPracowników.push({
        id: listaPracowników.length + 1,
        imie,
        nazwisko,
        stanowisko,
        pensja,
        pseudonim: "",
        zwolnij
    });
}
export const dodajPracownika = (pracownik: Pracownik) => {
    listaPracowników.push(pracownik);
}

export const zwolnijPracownika = (id: number, powód?: string | number) => {
    const pracownik = listaPracowników
    .find(pracownik => pracownik.id === id);
    if (pracownik && pracownik.zwolnij && powód) {
            pracownik.zwolnij(powód)
    }
}

const zwolnijGo = (...powody: (string | number)[]) => {
    powody.forEach(powód => {
        if (typeof powód === "number") {
            console.log("Zwolniono z powodu numer: " + powód);
        } else if (typeof powód === "string") {
            console.log("Zwolniono z powodu: " + powód);
        } else {
            console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
        }
    });
}