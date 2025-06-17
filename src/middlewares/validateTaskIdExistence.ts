import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const myClient = new PrismaClient();


export const validateTaskIdExistence = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const existingTask = myClient.task.findUnique({
        where: {
        id,
        },
    });

    if (!existingTask) {
        res
        .status(404)
        .json({ message: `Task '${id}' Not Found! Check Again!` });
        return
    }

    next();
};