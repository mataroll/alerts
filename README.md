# Real-Time Home Front Alerts Map

> 🚧 **Work in progress.**

A live map of Israel Home Front Command (Pikud HaOref) rocket alerts, with an alert feed and history.

## How it works
- **Serverless API proxy (Vercel functions):** `api/alerts.js` and `api/history-oref.js` fetch the official
  Oref alert feeds on the server, with the right headers, and send them back to the browser with CORS enabled.
  The browser can't call the Oref feeds directly.
- **Front end:** plain JavaScript with **Leaflet**. Polls for live alerts, shows them on a map, and lists them
  in a sidebar with a connection-status indicator.
- **History and filters:** browse past alerts, filter the archive, or paste alert data in by hand.

## Tech stack
JavaScript · Leaflet · Vercel serverless functions · REST APIs
