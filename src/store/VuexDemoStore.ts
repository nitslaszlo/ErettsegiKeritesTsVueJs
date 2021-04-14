import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class VuexDemoStore extends VuexModule {
  // State:
  private totalTvCount = 10;

  // Getters
  public get getTotalTvCount(): number {
    return this.totalTvCount;
  }

  @Action
  public async removeTv(amount: number): Promise<void> {
    if (this.totalTvCount >= amount) {
      // If we enough TVs, ask Jenny to remove it
      this.context.commit("removeTvMut", amount);
    }
  }

  @Mutation
  private removeTvMut(amount: number): void {
    this.totalTvCount -= amount;
  }
}

// For help: help\store_data_flow_diagram.png
