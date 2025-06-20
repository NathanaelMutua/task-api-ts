import express, { Express, Request, Response } from "express";
import path from "path";
import tasksRouter from "./routes/tasks.routes";
import dotenv from "dotenv";

dotenv.config({ path: ".env" }); //enable to read environment variables
const app: Express = express();
app.use(express.json());

// main/home route
app.get("/", (_req: Request, res: Response) => {
  res.send(`<h1>Task Api in TS</h1>`); // simplified
});
// app.get("/", (_req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "build/index.html")); // this will be how I pass my static index.html page to the main route
// });

app.use("/tasks", tasksRouter);

// this middleware tells express that whenever a static asset is required, it can look inside /public for assets like CSS
// app.use(express.static(path.join(__dirname, 'build/public')));

// port implementation
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Task API is running on port ${port}`));
