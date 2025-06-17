import { Router } from "express";
import {
  createNewTask,
  getAllTasks,
  getSpecificTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller";
import { validateNewTaskInput } from '../middlewares/validateNewTaskInput'
import { validateTaskIdExistence } from '../middlewares/validateTaskIdExistence'

const router = Router();

// POST /tasks (create a new task)
router.post("/", validateNewTaskInput, createNewTask);

// GET /tasks (retrieve all tasks)
router.get("/", getAllTasks);

// GET /tasks/:id (retrieve a specific task based on a query parameter)
router.get("/:id", validateTaskIdExistence, getSpecificTask);

// PATCH /tasks/:id (Update a specific task)
router.patch("/:id", validateTaskIdExistence, updateTask);

// DELETE /tasks/:id (Soft Delete a task)
router.delete("/:id", validateTaskIdExistence, deleteTask);

export default router;
