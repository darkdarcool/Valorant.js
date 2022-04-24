
const urls = {
  val_content: "/val/content/v1/contents",
  root: (region: string) => `https://${region}.api.riotgames.com`,
  user: (userName: string, region: string = "euw1") => `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}`, 
}

export default urls;