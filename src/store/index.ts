import Vue from "vue";
import Vuex from "vuex";
import VuexDemoModule from "@/store/VuexDemoStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vuexDemoModule: VuexDemoModule
  }
});
