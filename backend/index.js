require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5050", 10);

app.listen(port, () => {
  console.info(`⚡️[Server]: Is running at http://localhost:${port}`);
});
