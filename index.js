const express = require("express");
const next = require("next");
const path = require("path");
const PORT = process.env.PORT || 3000;
const nextApp = next({
  dev: process.env.NODE_ENV !== "PRODUCTION",
  dir: "next-client"
});
const handle = nextApp.getRequestHandler(); //part of next config

nextApp.prepare().then(() => {
  // express code here
  const app = express();

  app.use(
    "/css/fontawesome.css",
    express.static(
      path.join(
        __dirname,
        "./node_modules/@fortawesome/fontawesome-svg-core/styles.css"
      )
    )
  );
  app.use("/api", require("./backend/src/routes"));
 
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
