<template>
  <div id="app">
    <b-navbar id="myNavbar" toggleable="md">
      <b-navbar-brand id="brand">Kerítés</b-navbar-brand>
      <b-tooltip target="brand" placement="bottom">2018.10.25-i közismereti informatika emelt szintű érettségi</b-tooltip>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" href="kerites.txt" :link-attrs="downloadPropObj">
            <b-icon icon="cloud-download"></b-icon>
            kerites.txt
          </b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" to="/" :active="$route.name == 'Main'">
            <b-icon icon="tools" animation="spin"></b-icon>
            Megoldás
          </b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" to="/feladat" :active="$route.name == 'Feladat'">
            <b-icon icon="book"></b-icon>
            Feladat
          </b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" to="/javitasi" :active="$route.name == 'Javitasi'">
            <b-icon icon="card-checklist"></b-icon>
            Javítási
          </b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" href="https://github.com/nitslaszlo/ErettsegiKeritesTsVueJs" target="_blank">
            <b-icon icon="cloud-fill"></b-icon>
            Forráskód
          </b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded myNavitem" href="https://github.com/nitslaszlo/JedlikComplexStarter" target="_blank">
            <b-icon icon="terminal"></b-icon>
            SDK
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private downloadPropObj = { download: "" };
}
</script>

<style>
#app {
  font-family: Consolas, Monaco, monospace;
}

#myNavbar {
  background-color: #35bbe4;
}

.myNavitem {
  background-color: #bedce5;
  padding-left: 20px;
  padding-right: 20px;
}

.myNavitem:hover {
  background-color: #daf4fd;
}

.active {
  font-weight: bolder;
}
</style>
