import cors from "cors";
import express, { Response } from "express";
import path from "path";

const app = express();
app.use(cors());
const port = 4000;

app.get("/", (_, res: Response) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
