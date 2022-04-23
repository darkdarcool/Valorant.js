
import fetch from "node-fetch"

export default async function request(url: string, apiKey: any, filter?: string): Promise<Response> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://replit.com",
      "X-Riot-Token": apiKey
    }
  });
  let json = await response.json();
  if (filter) {
    json = json[filter]
  }
  return json;
}