import { Router } from "express";
import { createNewTask, getAllTasks, getSpecificTask, updateTask, deleteTask } from "../controllers/tasks.controller";

const router = Router();

// POST /tasks (create a new task)
router.post("/", createNewTask);

// GET /tasks (retrieve all tasks)
router.get("/", getAllTasks);

// GET /tasks/:id (retrieve a specific task based on a query parameter)
router.get("/:id", getSpecificTask);

// PATCH /tasks/:id (Update a specific task)
router.patch("/:id", updateTask);

// DELETE /tasks/:id (Soft Delete a task)
router.delete("/:id", deleteTask);

export default router;