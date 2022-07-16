import { Express, Request, Response } from "express";
import * as express from "express";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
