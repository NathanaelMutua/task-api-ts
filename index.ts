import express, { Express, Request, Response } from "express";
import path from 'path';

const app: Express = express();
app.use(express.json());
app.use(express.static(__dirname + "/public")); // this middleware tells express that whenever a static asset is required, it can look inside /public for assets like CSS

app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "index.html")); // this will be how I pass my static index.html page to the main route
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Task API is running on port ${port}`);    
});