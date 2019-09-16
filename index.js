const { unlinkSync } = require("fs");
const pino = require("pino");

const dest = pino.destination("./log.ndjson");
const log = pino({ level: "info", }, dest);

log.info("One");

unlinkSync("./log.ndjson");

dest.reopen();

log.info("Two");

setTimeout(() => {
    console.log("done");
}, 2000);