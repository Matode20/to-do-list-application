import express from "express";
import toDo from "./routes/toDo.js";

const app = express();
const port = 619;
app.use(express.json());

app.use("/api/v1/users", toDo);

app.get("/", (req, res) => {
  res.send("My todo-list app is working!");
});

app.listen(port, () => {
  console.log(`The server is listening on port http://localhost:${port}`);
});
