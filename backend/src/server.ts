import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Укажите типы для req и res
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Обработчик маршрута для всех остальных запросов
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
