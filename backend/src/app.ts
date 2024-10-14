import dotenv from 'dotenv';
dotenv.config({ path: require('path').resolve(__dirname, '../.env') });
// console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

import express from 'express';
import { json } from 'body-parser';
import translationRoutes from './routes/translationRoutes';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());
app.use(json());
app.use('/api', translationRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})