import express from "express";
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/create-tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.put("/update-tasks/:id", updateTask);
router.delete("/delete-tasks/:id", deleteTask);

export default router;