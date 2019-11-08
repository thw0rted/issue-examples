const express = require("express");
const { readFileSync } = require("fs");
const https = require("https");

const cert = readFileSync("./cert.pem");
const key = readFileSync("./key.pem");

// localhost:8001 serves the static site
const openServer = https.createServer({
    key, cert, ca: cert,
    requestCert: false,
});
const pageApp = express();
pageApp.use(express.static("public"));
openServer.on("request", pageApp);
openServer.listen(8001, "localhost");

// localhost:8002 is a service that will return the requesting client's cert CN
const tlsServer = https.createServer({
    key, cert, ca: cert,
    requestCert: true,
    rejectUnauthorized: true,
});

const tlsApp = express();
tlsApp.get("/", (req, res) => {
    const conn = /** @type {import("tls").TLSSocket} */(req.connection);
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:8001");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    return res.send(conn.getPeerCertificate().subject.CN);
})

tlsServer.on("request", tlsApp);
tlsServer.listen(8002, "localhost");