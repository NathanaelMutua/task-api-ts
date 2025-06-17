import { NextFunction, Request, Response } from "express";

export const validateNewTaskInput = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400).json({ message: "The Title Is Required!" });
    return
  }

  if (!description) {
    res.status(400).json({ message: "The Description Is Required!" });
    return
  }

  next();
};
