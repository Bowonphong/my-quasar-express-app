import { Router } from 'express';
import { prisma } from '../prisma.js';
const router = Router();
// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});
// Create a task
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = await prisma.task.create({
            data: { title, description },
        });
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});
// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.task.delete({ where: { id } });
        res.json({ message: 'Task deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});
export default router;
