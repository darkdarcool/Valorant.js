export type AgentData = {
  name: string,
  localizedNames: {
    [key: string]: string
  }
}

export class Agent {
  private agentData: AgentData;
  private curRegionName: string;
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
  }
  getCurRegionName() {
    return this.curRegionName;
  }
  getLocalizedName(regionName: string) {
    return this.localizedNames[regionName];
  }
}