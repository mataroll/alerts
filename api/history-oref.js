export default async function handler(req, res) {
  const response = await fetch('https://www.oref.org.il/WarningMessages/alert/History/AlertsHistory.json', {
    headers: {
      'Referer': 'https://www.oref.org.il/',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'he-IL,he;q=0.9,en-US;q=0.8',
      'Origin': 'https://www.oref.org.il'
    }
  });
  const text = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.send(text);
}
