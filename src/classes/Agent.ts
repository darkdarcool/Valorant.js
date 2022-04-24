export type AgentData = {
  name: string,
  localizedNames: {
    [key: string]: string
  },
  id: string,
  assetName: string,
}

export class Agent {
  private agentData: AgentData;
  private curRegionName: string;
  private id: string;
  private assetName: string;
  private localizedNames;

  constructor(agentData: AgentData) {
    this.agentData = agentData;
    this.extract();
  }
  /**
   * Parse agent data
   */
  private extract() {
    let data = this.agentData;

    this.curRegionName = data.name;
    this.localizedNames = data.localizedNames;
    this.id = data.id;
    this.assetName = data.assetName;
  }
  getName() {
    return this.curRegionName;
  }
  getLocalizedName(regionName: string) {
    console.log(this.localizedNames);
    return this.localizedNames[regionName];
  }
  getID() {
    return this.id;
  }
  getAssetName() {
    return this.assetName;
  }
  raw() {
    return this.agentData;
  }
}