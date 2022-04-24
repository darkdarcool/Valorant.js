import Client from "./Client";

let client = new Client("na", "RGAPI-b19c6ab2-036a-4838-87c4-2cdd222a3a41");


client.getAgent("Omen").then(agent => {
  console.log(agent.raw());
});