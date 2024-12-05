import pracownicy from '../dane/pracownicy.json' assert { type: "json" };
import { listaPracowników } from "./index.js";
import { Pracownik } from "./types/pracownikTypes.js";



export const dodajPracownikówZListy = () => {
    pracownicy.forEach((pracownik) => {
        const nowyPracownik: Pracownik = {
            ...pracownik,
            zwolnij: zwolnijGo
        };
        dodajPracownika(nowyPracownik);
    });
}

export const dodajNowegoPracownika = (imie: string, nazwisko: string, stanowisko: "szef" | "anetka" | "pani basia" | "podbutnik", pensja: [number, number], zwolnij?: (...powody: (string | number)[]) => void) => {
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

export const zwolnijPracownika = (id:number, powód: Powod) => {
    const pracownik = listaPracowników.find(pracownik => pracownik.id === id);
    if (pracownik) {
            pracownik.zwolnij(powód);
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