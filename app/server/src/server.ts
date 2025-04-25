import express, { Express, Request, Response } from 'express';
import { sessionMiddleware } from './middleware/session';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Express = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri: string = process.env.MONGODB_URI as string;

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).send('Server is running');
});

const PORT: string | number = process.env.PORT || 3000;

app.use(sessionMiddleware);

app.use('/api', routes());

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});