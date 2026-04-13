#!/usr/bin/env node
/**
 * Lokální server pro matematické riskuj (menu, hra, data).
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;
const HOST = "127.0.0.1";
const ROOT = __dirname;

const HTML_ROUTES = {
  "/": "riskuj-menu.html",
  "/riskuj-menu.html": "riskuj-menu.html",
  "/matematicke-riskuj.html": "matematicke-riskuj.html",
  "/matematicke-riskuj-zlomky.html": "matematicke-riskuj-zlomky.html",
  "/matematicke-riskuj-zlomky2.html": "matematicke-riskuj-zlomky2.html",
  "/matematicke-riskuj-zaporna.html": "matematicke-riskuj-zaporna.html",
  "/matematicke-riskuj-procenta.html": "matematicke-riskuj-procenta.html",
  "/riskuj-hra.html": "riskuj-hra.html",
  "/riskuj-editor.html": "riskuj-editor.html",
};

function safeJoin(name) {
  const base = path.basename(name);
  const full = path.join(ROOT, base);
  if (!full.startsWith(ROOT)) return null;
  return full;
}

const server = http.createServer((req, res) => {
  const raw = (req.url || "").split("?")[0];

  if (raw === "/riskuj-data.js") {
    const full = safeJoin("riskuj-data.js");
    fs.readFile(full, (err, buf) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(String(err.message || err));
        return;
      }
      res.writeHead(200, {
        "Content-Type": "application/javascript; charset=utf-8",
        "Content-Length": buf.length,
        "Cache-Control": "no-store",
      });
      res.end(buf);
    });
    return;
  }

  const fileName = HTML_ROUTES[raw];
  if (!fileName) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const full = safeJoin(fileName);
  fs.readFile(full, (err, buf) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(String(err.message || err));
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Length": buf.length,
      "Cache-Control": "no-store",
    });
    res.end(buf);
  });
});

server.listen(PORT, HOST, () => {
  console.log("Úvodní menu: http://" + HOST + ":" + PORT + "/");
  console.log("Hra (příklad): …/riskuj-hra.html?id=desetinne");
  console.log("Zastavení: Ctrl+C");
});
