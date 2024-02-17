import express, { Express } from "express";
import { Response } from "../interfaces/response";
import dotenv from "dotenv";
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 2000;

app.get("/tasks", (req, res) => {
  const data = {
    next: true,
    page: 0,
    limit: 10,
    total: 20,
    tasks: [
      {
        title: "task1",
        description: "test",
        tags: ["tag1", "tag2"],
        status: "Pending",
        teamMembers: [{ name: "john", image: "", email: "" }],
      },
    ],
  };

  const response: Response = {
    data,
    message: "Tasks fetched successfully",
    status: "Success",
  };
  res.send(response);
});
app.listen(port, () => {
  console.log("listening on port :" + port);
});
