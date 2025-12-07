import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/socket.js';
import { connectDB } from './lib/db.js'
import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js';
import path from 'path';

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);

if(process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', "index.html"));
    })
}

server.listen(PORT, (req, res) => {
    console.log(`Server is running at port ${PORT}`)
    connectDB();
});