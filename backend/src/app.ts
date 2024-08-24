import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes'; // Путь к маршрутам

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes); // Подключаем маршруты для аутентификации

export default app;
