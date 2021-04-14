// Megjegyzések stílusa: JSDoc 3 -> http://usejsdoc.org/

/** Egy telket leíró osztály */
export default class Telek {
  private _hazszam: number;
  private _telekSzelessege: number;
  private _keritesSzine: string;

  /** Az osztály konstruktora
   * @constructor1
   * @param {string} sor A forrás file egy sora
   */
  public constructor(sor: string, hazszam: number) {
    this._hazszam = hazszam;
    const m: string[] = sor.split(" ");
    if (m.length !== 3) throw new Error("Hibás forrás!");

    this._telekSzelessege = parseInt(m[1], 10);
    if (Number.isNaN(this._telekSzelessege)) throw new Error("Hibás forrás!");

    this._keritesSzine = m[2];
    if (!/^[A-Z:#]$/.test(this._keritesSzine)) {
      throw new Error("Hibás forrás!");
    }
  }

  // 3. feladathoz
  public get oldal(): string {
    return this._hazszam % 2 === 0 ? "páros" : "páratlan";
  }

  // 3. feladathoz
  public get hazszam(): number {
    return this._hazszam;
  }

  // 4. feladathoz
  public get paratlanOldali(): boolean {
    return this._hazszam % 2 === 1;
  }

  // 4. feladathoz
  public get keritesSzine(): string {
    return this._keritesSzine;
  }

  // 6. feladathoz
  public get telekSzelessege(): number {
    return this._telekSzelessege;
  }
}
