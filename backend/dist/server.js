import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);
app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
