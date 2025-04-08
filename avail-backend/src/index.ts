import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/data-source';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use('/api', authRoutes);

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => console.log('Server is running at http://localhost:' + PORT));
  })
  .catch((error) => {
    console.error('Databaseconnection failed', error);
  })