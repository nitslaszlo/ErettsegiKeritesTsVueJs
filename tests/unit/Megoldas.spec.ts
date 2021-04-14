import fs from "fs";
import Megoldás from "@/Megoldas";

describe("Megoldás osztály unit tesztek", () => {
  const instance: Megoldás = new Megoldás(fs.readFileSync("kerites.txt").toString());

  it("Megoldás osztálypéldány ellenőrzése", async () => {
    expect(instance).toBeInstanceOf(Megoldás);
  });

  it("Telkek száma", async () => {
    expect(instance.telkekSzama).toBe(98);
  });

  it("Utolsó telek oldal", async () => {
    expect(instance.utolsoTelek.oldal).toBe("páros");
  });

  it("Utolsó telek házszám", async () => {
    expect(instance.utolsoTelek.hazszam).toBe(78);
  });

  it("A szomszédossal egyezik a kerítés színe", async () => {
    expect(instance.ugyanOlyanSzinuKerites).toBe(73);
  });

  it("A kerítés színe/állapota", async () => {
    expect(instance.keritesSzineAllapota("83")).toBe("A");
  });

  it("Lehetséges festési szín", async () => {
    expect(instance.lehetsegesFestesiSzin("83")).toBe("D");
  });

  it("Fájlok összehasonlítása", async () => {
    expect(fs.readFileSync("utcakep.txt").toString()).toBe(fs.readFileSync("utcakepOH.txt").toString());
  });
});
