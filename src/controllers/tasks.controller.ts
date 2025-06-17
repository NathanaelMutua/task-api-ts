import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

export const createNewTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newTask = await myClient.task.create({
      data: { title, description },
    });
    res
      .status(201)
      .json({ message: "New Task Created Successfully!", new_task: newTask });
  } catch (e) {
    res.status(500).json({ message: "Something Went Wrong!" });
  }
};

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await myClient.task.findMany({
      where: { isDeleted: false },
    });
    res
      .status(200)
      .json({
        message: "All Tasks Retrieved Successfully!",
        all_tasks: allTasks,
      });
  } catch (e) {
    res.status(500).json({ message: "Something Went Wrong!" });
  }
};

export const getSpecificTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const specificTask = await myClient.task.findFirst({
            where: {isDeleted: false, id},
        });
        res.status(200).json({ message: `Task '${id}' Retrieved Successfully!`, specificTask })
    } catch (e) {
        res.status(500).json({ message: "Something Went Wrong!" });
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try{
        const  { id } = req.params;

        const { title, description } = req.body;

        const updatedTask = await myClient.task.update({
            where: {id},
            data: {title, description}
        });
        res.status(200).json({ message: `Task '${id}' Updated Successfully!`, updated_task: updatedTask })
    } catch (e) {
        res.status(500).json({ message: "SomethingWent Wrong!" })
    }
}