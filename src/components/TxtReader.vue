<template>
  <b-container fluid>
    <b-row class="my-2">
      <b-col cols="1" class="p-0">
        <b-icon icon="cloud-upload" font-scale="1.5" class="mt-3"></b-icon>
      </b-col>
      <b-col cols="11" class="p-0">
        <b-form-file id="myTxtFileLoader" v-model="file" accept=".txt" :state="Boolean(file)" :placeholder="placeholder" browse-text="Keresés..." drop-placeholder="Dobja ide!" class="d-inline shadow"></b-form-file>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
// A komponensek azonosítójában nem lehet ékezetes karakter pl.: TxtOlvasó !
export default class TxtReader extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private file: any = null;
  @Prop() private label!: string;
  @Prop() private placeholder!: string;

  @Watch("file", { immediate: true, deep: true })
  private haFileValtozik() {
    if (this.file) {
      const reader: FileReader = new FileReader();
      reader.onload = e => {
        if (e.target) {
          this.$emit("load", reader.result);
        }
      };
      if (this.file) {
        reader.readAsText(this.file);
      }
    }
  }
}
</script>

<style></style>
