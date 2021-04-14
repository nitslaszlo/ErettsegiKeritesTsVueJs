<template>
  <div id="main">
    <b-container fluid>
      <b-row>
        <b-col lg="6">
          <TxtReader label="" placeholder="kerites.txt" class="my-0" @load="txtSorai = $event" />
          <div v-if="megoldas" id="megoldas" class="shadow">
            <p>
              2. feladat<br />
              Az eladott telkek száma: {{ megoldas.telkekSzama }}
            </p>
            <p>
              3. feladat<br />
              A {{ megoldas.utolsoTelek.oldal }} oldalon adták el az utolsó telket<br />
              Az utolsó telek házszáma: {{ megoldas.utolsoTelek.hazszam }}
            </p>
            <p>
              4. feladat<br />
              A szomszédossal egyezik a kerítés színe: {{ megoldas.ugyanOlyanSzinuKerites }}
            </p>
            <p>
              5. feladat
              <b-row>
                <b-col sm="auto">
                  <label for="hazszamInput">Adjon meg egy házszámot!</label>
                </b-col>
                <b-col cols="3">
                  <b-form-input id="hazszamInput" v-model="hazszamInputStr" size="sm" type="number" min="1" max="117"></b-form-input>
                </b-col>
              </b-row>
              <br />
              A kerítés színe / állapota: {{ megoldas.keritesSzineAllapota(hazszamInputStr) }}
              <br />
              Egy lehetséges festési szín: {{ megoldas.lehetsegesFestesiSzin(hazszamInputStr) }}
            </p>
          </div>
        </b-col>
        <b-col lg="6">
          <div v-if="megoldas">
            <TxtWriter title="utcakep.txt állomány mentése" :content="megoldas.utcakep" filename="utcakep.txt" class="shadow" />
          </div>
          <div v-if="megoldas" id="egyebek">
            utcakep.txt fájl:
            <div class="overflow-auto myBack1 shadow">
              <pre>{{ megoldas.utcakep.trim() }}</pre>
            </div>
            kerites.txt fájl:
            <div class="overflow-auto myBack1 shadow" style="height: 200px">
              <pre>{{ txtSorai.trim() }}</pre>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Megoldas from "@/Megoldas";
import TxtReader from "@/components/TxtReader.vue";
import TxtWriter from "@/components/TxtWriter.vue";

@Component({ components: { TxtReader, TxtWriter } })
export default class Main extends Vue {
  private megoldas: Megoldas | null = null;
  private txtSorai = ""; // Watch végett nem lehet ékezetes azonosító! (pl.: forrás)!
  // 5. feladat:
  private hazszamInputStr = "83";

  @Watch("txtSorai", { immediate: true, deep: true })
  private haForrasValtozik(val: string) {
    // if (val !== "") this.feldolgoz();
    try {
      if (val !== "") this.megoldas = new Megoldas(this.txtSorai);
    } catch (error) {
      window.alert("Hibás forrás!");
      location.reload();
    }
  }
}
</script>

<style>
#main {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.myBack1 {
  background-color: #bedce5;
  padding: 5px;
  border-radius: 10px;
}

#hazszamInput {
  background-color: #35bbe4;
  border: 1px solid black;
}

#megoldas {
  background-color: #bedce5;
  padding: 10px;
  border-radius: 10px;
}

pre {
  font-size: 1em;
  margin: 0;
}
</style>
