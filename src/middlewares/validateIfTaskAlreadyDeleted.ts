import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const myClient = new PrismaClient();

export const validateIfTaskAlreadyDeleted = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;

    const taskToBeDeleted = await myClient.task.findFirst({
        where: {
        id,
        isDeleted: true,
        },
    });

    if (taskToBeDeleted) {
        res.status(400).json({ message: `Task '${id}' Already Deleted!` });
        return
    }

    next();
    };