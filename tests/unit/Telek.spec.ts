import Telek from "@/Telek";

describe("Telek osztály unit tesztek", () => {
  const instance1: Telek = new Telek("0 10 P", 2);
  const instance2: Telek = new Telek("1 8 K", 1);
  const instance3: Telek = new Telek("1 10 :", 3);
  const instance4: Telek = new Telek("1 9 S", 5);
  const instance5: Telek = new Telek("0 10 P", 4);

  it("Telek osztálypéldányok ellenőrzése", async () => {
    expect(instance1).toBeInstanceOf(Telek);
    expect(instance2).toBeInstanceOf(Telek);
    expect(instance3).toBeInstanceOf(Telek);
    expect(instance4).toBeInstanceOf(Telek);
    expect(instance5).toBeInstanceOf(Telek);
  });

  it("oldal jellemző", async () => {
    expect(instance1.oldal).toBe("páros");
    expect(instance2.oldal).toBe("páratlan");
    expect(instance3.oldal).toBe("páratlan");
    expect(instance4.oldal).toBe("páratlan");
    expect(instance5.oldal).toBe("páros");
  });

  it("hazszam jellemző", async () => {
    expect(instance1.hazszam).toBe(2);
    expect(instance2.hazszam).toBe(1);
    expect(instance3.hazszam).toBe(3);
    expect(instance4.hazszam).toBe(5);
    expect(instance5.hazszam).toBe(4);
  });

  it("paratlanOldali jellemző", async () => {
    expect(instance1.paratlanOldali).toBe(false);
    expect(instance2.paratlanOldali).toBe(true);
    expect(instance3.paratlanOldali).toBe(true);
    expect(instance4.paratlanOldali).toBe(true);
    expect(instance5.paratlanOldali).toBe(false);
  });

  it("keritesSzine jellemző", async () => {
    expect(instance1.keritesSzine).toBe("P");
    expect(instance2.keritesSzine).toBe("K");
    expect(instance3.keritesSzine).toBe(":");
    expect(instance4.keritesSzine).toBe("S");
    expect(instance5.keritesSzine).toBe("P");
  });

  it("telekSzelessege jellemző", async () => {
    expect(instance1.telekSzelessege).toBe(10);
    expect(instance2.telekSzelessege).toBe(8);
    expect(instance3.telekSzelessege).toBe(10);
    expect(instance4.telekSzelessege).toBe(9);
    expect(instance5.telekSzelessege).toBe(10);
  });
});
