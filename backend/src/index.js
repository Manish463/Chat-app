import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/socket.js';
import { connectDB } from './lib/db.js'
import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js';

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

server.listen(PORT, (req, res) => {
    console.log(`Server is running at port ${PORT}`)
    connectDB();
});