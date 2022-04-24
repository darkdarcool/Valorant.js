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
  /**
   * Gets the agent data for a specific agent
   * @param agentName 
   * @returns Agent
   */
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
  /**
   * Gets a players id
   * @param userName 
   * @returns Response
   */
  async getUser(userName: string) {
    let url = urls.user(userName);
    let response = await request(url, this.apiKey);
    return response;
  }
}