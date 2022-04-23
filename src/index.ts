import Client from "./Client";

let client = new Client("na", "RGAPI-554966d9-1f8a-4100-a278-e56d35fb834e");

client.getAgent("Omen").then(agent => {
  console.log(agent.getLocalizedName("zh-CN"));
});