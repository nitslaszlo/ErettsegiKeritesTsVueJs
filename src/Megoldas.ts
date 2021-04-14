import Telek from "./Telek";

export default class Megoldas {
  private _telkek: Telek[] = [];

  public get telkekSzama(): number {
    return this._telkek.length;
  }

  public get utolsoTelek(): Telek {
    return this._telkek[this._telkek.length - 1];
  }

  public get ugyanOlyanSzinuKerites(): number {
    let elozoTelek: Telek | undefined; // induláskor undefined értékű
    // elozoKerites! -> igaz, ha értéke nem null vagy undefined
    for (const aktTelek of this._telkek.filter(x => x.paratlanOldali)) {
      if (elozoTelek && aktTelek.keritesSzine !== "#" && aktTelek.keritesSzine !== ":" && aktTelek.keritesSzine === elozoTelek.keritesSzine) {
        return elozoTelek.hazszam;
      } else elozoTelek = aktTelek; // ha még undefined az ElozoTelek
    }
    return -1; // id a feladatkiírás szerint már nem juthat el
  }

  public get utcakep(): string {
    let sor1 = "";
    let sor2 = "";
    for (const i of this._telkek.filter(x => x.paratlanOldali)) {
      sor1 += "".padEnd(i.telekSzelessege, i.keritesSzine);
      sor2 += i.hazszam.toString().padEnd(i.telekSzelessege, " ");
    }
    return `${sor1}\r\n${sor2}\r\n`;
  }

  public constructor(txtSorai: string) {
    let aktParosHazszam = 2;
    let aktParatlanHazszam = 1;
    txtSorai.split("\n").forEach(i => {
      const aktSor: string = i.trim();
      if (aktSor.length > 0) {
        if (aktSor[0] === "0") {
          this._telkek.push(new Telek(aktSor, aktParosHazszam));
          aktParosHazszam += 2;
        } else {
          this._telkek.push(new Telek(aktSor, aktParatlanHazszam));
          aktParatlanHazszam += 2;
        }
      }
    });
  }

  public keritesSzineAllapota(hazszamInputStr: string): string {
    const hazszamInput: number = parseInt(hazszamInputStr, 10);
    const keresettTelek: Telek[] = this._telkek.filter(x => x.hazszam === hazszamInput);
    if (keresettTelek.length !== 0) {
      return keresettTelek[0].keritesSzine;
    } else {
      return "Nincs ilyen házszám!"; // ez nem volt feladat, de így korrekt
    }
  }

  public lehetsegesFestesiSzin(hazszamInputStr: string): string {
    const hazszamInput: number = parseInt(hazszamInputStr, 10);
    const keresettTelek: Telek[] = this._telkek.filter(x => x.hazszam === hazszamInput);
    const balSzomszedTelek: Telek[] = this._telkek.filter(x => x.hazszam === hazszamInput + 2);
    const jobbSzomszedTelek: Telek[] = this._telkek.filter(x => x.hazszam === hazszamInput - 2);
    let lehetsegesSzinek: string[] = ["A", "B", "C", "D"];
    if (keresettTelek.length !== 0) {
      // ha van telek, aminek a kerítését festeni kell
      lehetsegesSzinek = lehetsegesSzinek.filter(x => x !== keresettTelek[0].keritesSzine);
    } else return "Nincs ilyen házszám!";
    // ha van bal szomszéd:
    if (balSzomszedTelek.length !== 0) {
      lehetsegesSzinek = lehetsegesSzinek.filter(x => x !== balSzomszedTelek[0].keritesSzine);
    }
    // ha van jobb szomszéd:
    if (jobbSzomszedTelek.length !== 0) {
      lehetsegesSzinek = lehetsegesSzinek.filter(x => x !== jobbSzomszedTelek[0].keritesSzine);
    }
    return lehetsegesSzinek[0];
  }
}
