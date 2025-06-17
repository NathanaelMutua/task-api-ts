import express, { Express, Request, Response } from "express";
import path from "path";
import { createNewTask, getAllTasks, getSpecificTask, updateTask } from "./controllers/tasks.controller";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();
const app: Express = express();
app.use(express.json());

// main/home route
app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html")); // this will be how I pass my static index.html page to the main route
});

// POST /tasks (create a new task)
app.post("/tasks", createNewTask);

// GET /tasks (retrieve all tasks)
app.get("/tasks",getAllTasks);

// GET /tasks/:id (retrieve a specific task based on a query parameter)
app.get("/tasks/:id", getSpecificTask)

// PATCH /tasks/:id (Update a specific task)
app.patch("/tasks/:id", updateTask)

// this middleware tells express that whenever a static asset is required, it can look inside /public for assets like CSS
app.use(express.static(__dirname + "public"));

// port implementation
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Task API is running on port ${port}`));
