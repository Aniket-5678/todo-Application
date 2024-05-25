import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const newTask = new Task({ title, description, status, dueDate });
        await newTask.save();
        res.status(201).json({ success: true, task: newTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ success: false, message: "Task not found" });
        res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status, dueDate }, { new: true });
        if (!task) return res.status(404).json({ success: false, message: "Task not found" });
        res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ success: false, message: "Task not found" });
        res.status(200).json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};