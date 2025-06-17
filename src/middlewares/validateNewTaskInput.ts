import { NextFunction, Request, Response } from "express";

export const validateNewTaskInput = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "The Title Is Required!" });
  }

  if (!description) {
    return res.status(400).json({ message: "The Description Is Required!" });
  }

  next();
};
