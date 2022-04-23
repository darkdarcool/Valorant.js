import request from "./utils/fetch"
import urls from "./urls"
import { Agent } from "./classes/Agent"
import { AgentData } from "./classes/Agent"

export default class Client {
  private region: string;
  private apiKey: string;

  constructor(region: string, apiKey: string) {
    this.region = region;
    this.apiKey = apiKey;
  }
  async getAgent(agentName: string) {
    let url = urls.root(this.region) + urls.val_content;
    let response = await request(url, this.apiKey, "characters");
    for (let key in response) {
      if (response[key].name === agentName) { // Agent found
        let agentData: AgentData = response[key];
        return new Agent(agentData);
      }
    }
    // No agent was found
    return null;
    
  }
}