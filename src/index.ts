import { dodajNowegoPracownika, dodajPracownika, dodajPracownikówZListy, zwolnijPracownika } from "./pracownicy.js";
import { generujRaport } from "./raporty.js";
import { Pracownik, PaniBasia, Waluta } from "./types/pracownikTypes.js";
import { RaportPracownika } from "./types/raportTypes.js";

export const listaPracowników: Pracownik[] = [];

const paniBasia: PaniBasia = {
    id: 0,
    imie: "Basia",
    nazwisko: "Kowalska",
    stanowisko: "pani basia",
    pensja: [4000, Waluta.Złoty_Polski_Peelen],
    pseudonim: "Basia",
    graNaSkrzypcach: "pięknie",
    bezNiejTenZakładUpadnie: true
}

const uruchomDzieńPracy = async () => {
    dodajNowegoPracownika("Jan", "Kowalski", "podbutnik",[100, Waluta.Dolar_fajny_taki_amerykanski]);
    dodajPracownikówZListy();
    dodajPracownika(paniBasia);
    zwolnijPracownika(0, 1);

    const efektyPracy = {
        obniżonaEfektywność: true,
        spadekPensji: 1000
    };
    const raportPracownika = await generujRaport(efektyPracy, 0, "brak") as RaportPracownika;
    const raportPracowników = await generujRaport({
        0: efektyPracy,
        1: efektyPracy
    }, 0, "brak");
    const raportPieseczka = await generujRaport({szczekanie: true, isPies: true, aKtoToJestTakimSłodkimPieseczkiem: true}, 0, "brak");

    if(raportPieseczka.isPies){
        console.log("Dobra psinka!");
    }
}

uruchomDzieńPracy();