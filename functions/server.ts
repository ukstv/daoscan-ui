import express from "express";
import cors from "cors";
import * as fs from "fs";
import path from "path";
import serverless from "serverless-http";

const app = express();

const buildDir = path.resolve(__dirname, "../dist");
const templatePath = path.resolve(buildDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

app.use(cors());
app.use(express.static(buildDir, { etag: true }));

// Someday Maybe Server-side rendering
// const publicDir = path.resolve(__dirname, "../public");
// const indexHtmlPath = path.resolve(publicDir, "index.html");
//
// app.get("/*", async (req, res) => {
//   try {
//     const indexHtml = (await fs.promises.readFile(indexHtmlPath)).toString();
//     const html = ReactDOMServer.renderToString(React.createElement(Application));
//     return res.send(indexHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`)).end();
//   } catch (e) {
//     console.error(e);
//     return res.status(404).end();
//   }
// });

export const handle = serverless(app, {
  binary: (headers: any) => {
    let ct = headers["content-type"];
    if (ct === undefined) {
      console.error("No content-type header: " + JSON.stringify(headers));
      return false;
    }
    // cut ; charset=UTF-8
    if (ct.indexOf(";") > 0) {
      ct = ct.substring(0, ct.indexOf(";"));
    }
    const binary = Boolean(String(ct).match(/.*(png|ico|jpg|webp)$/));
    console.log("binary: " + ct + " -> binary: " + binary);
    return binary;
  },

  request: function(request: any, event: any, context: any) {
    const { method, url } = request;
    request.__started = new Date().getTime();
    console.log(`--> ${method} ${url}`);
  },

  response: function(response: any, event: any, context: any) {
    const { statusCode, statusMessage } = response;
    const { method, url } = response.req;
    const now = new Date().getTime();
    const elapsed = now - response.req.__started;
    console.log(`<-- ${statusCode} ${statusMessage} ${method} ${url} Δ ${elapsed}ms`);
  }
});
